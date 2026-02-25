---
title: "Running CAW with AWS Batch"
description: "How we use AWS Batch to scale up CAW"
date: 2017-11-16
author: "maxulysse"
tags: ["aws", "caw", "containers", "docker", "nextflow"]
image:
  path: "/assets/img/category/aws.png"
---


Following [this post](https://www.nextflow.io/blog/2017/scaling-with-aws-batch.html) from Nextflow blog, I'm writing a small guide on how I'm doing that for [CAW](http://opensource.scilifelab.se/projects/caw/).

## The useful documentation

- Working with Amazon S3 Buckets: [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html)
- Getting starting with AWS Batch: [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/Batch_GetStarted.html)
- Get set up for AWS Batch: [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/get-set-up-for-aws-batch.html)
- Amazon Cloud - AWS Batch: [Nextflow docs](https://www.nextflow.io/docs/latest/awscloud.html#aws-batch)

## Things that had to be done

- New `--outDir` parameter for `CAW` to write output into a `S3` bucket
- New `S3` bucket for references: `s3://caw-references/`
- New `S3` bucket for test data: `s3://caw-test-data/`
- New `S3` bucket for results: `s3://caw-test-results/Results`
- New `S3` bucket for Nextflow work: `s3://caw-test-results/work`
- New TSV files for the test data:
  - in the test data bucket: `s3://caw-test-data/tsv/`
  - in the GitHub `CAW` repository:
    - [`tiny-manta-s3.tsv`](https://github.com/SciLifeLab/Sarek/blob/1.2.5/data/tsv/tiny-manta-s3.tsv)
    - [`tiny-s3.tsv`](https://github.com/SciLifeLab/Sarek/blob/1.2.5/data/tsv/tiny-s3.tsv)
- Added AWS settings in my `~/.nextflow/config` file

```groovy
// For AWS - Personal settings
aws {
    accessKey = 'xxx'
    secretKey = 'yyy'
    region = 'eu-west-1'
}
```

- New AWS specific profile

```groovy
profiles {
    // Docker images will be pulled automatically
    aws { // For running on AWS Batch with Docker
      includeConfig 'configuration/aws-batch.config'
      includeConfig 'configuration/docker.config'
      includeConfig 'configuration/containers.config'
      includeConfig 'configuration/genomes.config'
    }
}
```

- New AWS Batch specific config file [`aws-batch.config`](https://github.com/SciLifeLab/Sarek/blob/1.2.5/configuration/aws-batch.config)
  - `bundleDir` has been replaced by `params.genome_base` in [`genomes.config`](https://github.com/SciLifeLab/Sarek/blob/1.2.5/configuration/genomes.config) for easier configuration.
  - using `params.genome_base` for referencing the `S3` bucket:

```groovy
params {
      genome_base = params.genome == 'GRCh37' ? "s3://caw-references/grch37" : params.genome == 'GRCh38' ? "s3://caw-references/grch38" : "s3://caw-references/smallgrch37"
}
```

- Specify executor:

```groovy
process.executor = 'awsbatch'
```

- New spot fleet role `AmazonEC2SpotFleetRole` cf [AWS docs - Create Spot Fleet Role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html)
- New Job Queue `caw-job-queue` cf [AWS docs - Creating a Job Queue](https://docs.aws.amazon.com/batch/latest/userguide/create-job-queue.html)
- New compute environment `caw-compute-environment` cf [AWS Batch console first-run wizard](https://eu-west-1.console.aws.amazon.com/batch/home?region=eu-west-1#/wizard):
  - Unmanaged
  - No job submission
  - Provisioning Model for compute resources is: `Spot`
  - Spot fleet role is: `AmazonEC2SpotFleetRole`
- Specify job queue:

```groovy
process.queue = 'caw-job-queue'
```

## Attempts

### First try

```bash
nextflow run main.nf -profile awsbatch -w s3://caw-test-results/work --outDir s3://caw-test-results/Results --sample s3://caw-test-data/tsv/tiny-s3.tsv --verbose --genome smallGRCh37
```

Error:

```bash
Invalid AWS Batch job definition -- provide a Docker image name or a Batch job definition name
```

We do need a container for every process, even if the process does not need one.

Solution:

- Define containers for processes without one.

### Second try

Error:

```bash
ERROR ~ Failed to sanitize XML document destined for handler class com.amazonaws.services.s3.model.transform.XmlResponsesSaxParser$ListBucketHandler
```

Problem might be due to bad AMI configuration.

Solution:

- Created a custom AMI for CAW cf [Nextflow docs - Custom AMI](https://www.nextflow.io/docs/latest/awscloud.html#custom-ami) and [AWS docs - Creating a Compute Resource AMI](https://docs.aws.amazon.com/batch/latest/userguide/create-batch-ami.html).
- AMI is `ami-7ce35005`

### Third try

Create a managed compute environment, and user-specified AMI ID: `ami-7ce35005`
Error:

```bash
JobQueue caw-job-queue not found. (Service: AWSBatch; Status Code: 400; Error Code: ClientException; Request ID: 778694b4-cecf-11e7-b649-9f5e67e1cb80)
```

Forgot to create job queue when creating the compute environment.
Solution:

- Create job queue cf [AWS docs - Creating a Job Queue](https://docs.aws.amazon.com/batch/latest/userguide/create-job-queue.html)

### Fourth try

Error:

```bash
Likely it has been terminated by the external system
```

Nextflow Docs:
> This may happen when Batch is unable to execute the process script. A common cause of this problem is that the Docker container image you have specified uses a non standard entrypoint which does not allow the execution of the BASH launcher script required by Nextflow to run the job.
> Check also the Job execution log in the AWS Batch dashboard for further error details.

Error in AWS Batch dashboard is: `Essential container in task exited`

Most likely cause by:

```bash
bash: /home/ec2-user/miniconda/bin/aws: No such file or directory
```

Need to check if AMI is correctly configured.

- `/home/ec2-user/miniconda/bin/aws` is in the AMI
- Check if path to `awscli` is specified in the right place.
- Path seems to be in the right place
- Adding `executor.name = 'awsbatch'`

### Fifth try

Error:

```bash
Likely it has been terminated by the external system
```

Error in AWS Batch dashboard is: `Essential container in task exited`

Most likely cause by:

```text
download failed: s3://caw-test-results/work/58/0cd09f18e95da23336db35af5c39ee/.command.run to - An error occurred (403) when calling the HeadObject operation: Forbidden
upload failed: - to s3://caw-test-results/work/58/0cd09f18e95da23336db35af5c39ee/.command.log An error occurred (AccessDenied) when calling the PutObject operation: Access Denied
```

Missing `AmazonS3FullAccess` attached as a policy for the Instance Role.

Solution:

- Add policy `AmazonS3FullAccess` to `ecsInstanceRole`

### Sixth try

Error:

```bash
Missing output file(s) `*_fastqc.{zip,html}` expected by process `RunFastQC (1234-1234N_1)`
```

It seems that no file were copied from the s3 source bucket into the s3 work directory bucket.

Check if the files in question exists.

```bash
≻aws s3 ls s3://caw-test-data/tiny/normal/tiny_n_L001_R1_xxx.fastq.gz
2017-11-20 11:25:32      45010 tiny_n_L001_R1_xxx.fastq.gz
≻aws s3 ls s3://caw-test-data/tiny/normal/tiny_n_L001_R2_xxx.fastq.gz
2017-11-20 11:25:32      47703 tiny_n_L001_R2_xxx.fastq.gz
```

They do exist, so probably an issue regarding permission.

Tried to correct it within a new Secure Groups settings.

But nothing seems to work, so asking Paolo to the rescue (cf: [issue](https://github.com/nextflow-io/nextflow/issues/535))

> @pditomaso: @MaxUlysse if still not working open an issue including NF output, `.nextflow.log` file and task `.command.run`, `.command.log`, `.command.out` and `.command.err`

### Seventh try

This last one was finally the successful one B-).
