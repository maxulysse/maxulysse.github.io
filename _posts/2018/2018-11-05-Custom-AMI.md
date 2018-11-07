---
layout: post
title: How to make a bigger custom AMI?
description: How to make a custom AMI with a size big enough
date: 2018-11-05 10:00
date_modified: 2018-11-07 10:00
tags:
  - AMI
  - AWS
  - Containers
  - Docker
  - Nextflow
  - Sarek
author: maxulysse
image:
  path: /assets/img/category/aws.png
---

Following this post set of posts on running Nextflow with AWS Batch:
- Nextflow blog: [Scaling with AWS Bach](https://www.nextflow.io/blog/2017/scaling-with-aws-batch.html)
- This blog: [Running CAW with AWS Batch](https://maxulysse.github.io/2017/11/16/Running-CAW-with-AWS-Batch/)
- Alexander Peltzer's blog: [Running nf-co.re pipelines with AWSBatch](https://apeltzer.github.io/post/01-aws-nfcore/)
- Anthony Underwood's blog: [Running Nextflow on AWS batch](https://antunderwood.gitlab.io/bioinformant-blog/posts/running_nextflow_on_aws_batch/)

I'm writing a small guide on how to make a custom [AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) with a big enough size to run some actual data with.

All the instructions are in fact listed in the [custom AMI Nextflow docs](https://www.nextflow.io/docs/latest/awscloud.html#custom-ami) and this solution is [there](https://forums.aws.amazon.com/message.jspa?messageID=811761#811761), but as I struggled once already, I prefer to document it for everyone and especially future me.

- On the AWS EC2 Dashboard, launch a new instance
- `1. Choose AMI`: Search for and choose `Amazon ECS-Optimized Amazon Linux AMI` in the `AWS MArketplace`
- `2. Choose Instance Type`: Choose a `t2.micro`
- `3. Configure Instance`: Leave default configuration
- `4. Add Storage`: Input `500 GiB` or any other size, but `22 GiB` is definitively not big enough for actual real life data.
- `5. Add Tags`: Do as you want
- `6. Configure Security Group`: Just make sure you can connect to the `EC2` Instance.
- `7. Review Instance Launch`: Procure a key pair that you have so that you can access your Instance
- Launch the newly created Instance (`Actions` -> `Instance State` -> `Start`), it should be easy to find
- Connect providing the key pair specified earlier.
- The `ssh` command provided by AWS is wrong, you need to replace `root` by `ec2-user`
- `sudo yum update` to update the system
- Install `awscli` using `conda`, so install `conda` first, and actually install `wget` before
```bash
sudo yum install wget
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86\_64.sh
bash Miniconda3-latest-Linux-x86\_64.sh -p /home/ec2-user/miniconda
# You can either source .bashrc or specify the path to conda
source .bashrc
conda install -c conda-forge awscli
```
- Edit this file: `/etc/sysconfig/docker-storage`
- Add this option `--storage-opt dm.basesize=500GB` (or specify any other size you prefer)
- `sudo service docker restart` to restart the docker daemon
- Check that you actually have the size you wanted with `docker info | grep -i base` and `docker info | grep -i data`

For all their support, thanks to:
- [alneberg](https://github.com/alneberg)
- [apeltzer](https://github.com/apeltzer)
- [KochTobi](https://github.com/KochTobi)
- [t-neumann](https://github.com/t-neumann)
