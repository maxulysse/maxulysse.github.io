<section data-background-image="{{ site.url }}/assets/img/svg/green_white_bg.svg" data-background-opacity=0.9 >

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_bytesize2_logo.svg "nf-core-bytesize")](https://nf-co.re) <!-- .element class="image-H10" -->

## How nf-core/configs work?

<small>

Maxime Garcia / [<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau) / [<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[The Swedish Childhood Tumor Biobank](https://ki.se/forskning/barntumorbanken) / [National Genomics Infrastructure](https://ngisweden.scilifelab.se/)

[<i class="fa fa-globe-europe"></i> nf-co.re/events/2021/bytesize-2-configs](https://nf-co.re/events/2021/bytesize-2-configs), online - 2021/02/09

</small>

---

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

* Workflow manager
  * Data driven language
  * __Portable__
    * executable on multiple platforms
  * __Shareable and reproducible__
    * with containers or virtual environments
    * `Docker`, `Singularity` or `Conda`

---

## Run nf-core/eager on test data

* On a new machine (with `Docker` installed)
* Specify everything on the command line

```text
export NXF_VER=20.04.0 ; curl -s https://get.nextflow.io | bash

git clone --single-branch --branch eager https://github.com/nf-core/test-datasets.git data

nextflow run nf-core/eager -r 2.3.1 \
  -with-docker nfcore/eager:2.3.1 \
  --max_cpus 2 \
  --max_memory 6.GB \
  --genome false \
  --fasta data/reference/Mammoth/Mammoth_MT_Krause.fasta \
  --input data/testdata/Mammoth/mammoth_design_fastq.tsv
```

---

## Why is it working

* container engine with `container:tag`
* available resources
* path to reference genome file
* path to input files

---

## With configs

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html](https://www.nextflow.io/docs/latest/config.html)

```text
nextflow run nf-core/eager -r 2.3.1 -c my_computer.config /
  --fasta data/reference/Mammoth/Mammoth_MT_Krause.fasta /
  --input data/testdata/Mammoth/mammoth_design_fastq.tsv
```

> `my_computer.config`
>
> ```groovy
> docker.enabled = true
> docker.fixOwnership = true
>
> params {
>   max_cpus = 2
>   max_memory = 6.GB
>   genome = false
>}
>```
>
> `nf-core/eager/nextflow.config`
>
> ```grooyv
> process.container = 'nfcore/eager:2.3.1'
> ```

---

## With profile

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html#config-profiles](https://www.nextflow.io/docs/latest/config.html#config-profiles)

```text
nextflow run nf-core/eager -r 2.3.1 -profile test_tsv,docker
```

> `docker`
>
> ```groovy
> docker.enabled = true
> docker.fixOwnership = true
> ```
>
> `test_tsv`
>
> ```groovy
> params {
>   max_cpus = 2
>   max_memory = 6.GB
>   genome = false
>
>   fasta = 'data/reference/Mammoth/Mammoth_MT_Krause.fasta'
>   input = 'data/testdata/Mammoth/mammoth_design_fastq.tsv'
> }
> ```

---

## On my institutional HPC

* Which container/virtual environment engine?
* What are the available resources?
* Which `executor`?
* Where are the reference genome files?
* Where are the input files?

---

## Let's make a config file

```text
nextflow run nf-core/eager -r 2.3.1 -c my_hpc.config /
  --fasta /data1/maxime/workspace/nf-core/eager/data/reference/Mammoth/Mammoth_MT_Krause.fasta /
  --input /data1/maxime/workspace/nf-core/eager/data/testdata/Mammoth/mammoth_design_fastq.tsv
```

`my_hpc.config`

```groovy
singularity {
  cacheDir = '/data0/containers/'
  enabled = true
  runOptions = '-B /scratch:/scratch -B /shared:/shared'
}

process {
  beforeScript = 'module load singularity/3.4.2'
  executor = 'slurm'
  clusterOptions = { "-A $params.project ${params.clusterOptions ?: ''}" }
}

params {
  max_memory = 125.GB
  max_cpus = 20
  max_time = 240.h
}
```

---

## Let's make a profile

[<i class="fab fa-github"></i> github.com/nf-core/configs#adding-a-new-config](https://github.com/nf-core/configs#adding-a-new-config)

`nf-core/configs/conf/my_hpc.config`

`nf-core/configs/nfcore_custom.config`

```groovy
  my_hpc       { includeConfig "${params.custom_config_base}/conf/my_hpc.config" }
```

> __NB:__ Don't forget docs and CI tests.

---

# Tips

All nf-core pipelines are designed for a usage on a typical HPC, with reasonable default resources for each process.

===

`conf/base.config`

```groovy
process {
  cpus = { check_max( 1 * task.attempt, 'cpus' ) }
  memory = { check_max( 7.GB * task.attempt, 'memory' ) }
  time = { check_max( 24.h * task.attempt, 'time' ) }


  errorStrategy = { task.exitStatus in [143,137,104,134,139] ? 'retry' : 'finish' }
  maxRetries = 3
  maxErrors = '-1'

  withLabel:process_low {
    cpus = { check_max( 2 * task.attempt, 'cpus' ) }
    memory = { check_max( 12.GB * task.attempt, 'memory' ) }
    time = { check_max( 6.h * task.attempt, 'time' ) }
  }
[...]
}
```

`nextflow.config`

```groovy
params {
  max_cpus = 16
  max_memory = 128.GB
  max_time = 240.h
}
```

===

## Max resources

* It is just a threshold not to go over
* Will change the limit, not the resources

If you want to change the base resource,
look at the `cpus`, `memory` and `time` properties in the scope `process`.

===

## Change resource requirements

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html#process-selectors](https://www.nextflow.io/docs/latest/config.html#process-selectors)

```groovy
process {
  withName: PROCESS_NAME {
    maxRetries = 1
    memory = 725.GB
    cpus = 40
    time = 24.h
  }
}
```

===

## Include a config file in a profile

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html#config-include](https://www.nextflow.io/docs/latest/config.html#config-include)

```groovy
includeConfig 'my_conf.config'
```

===

## Test online

```bash
nextflow run nf-core/eager -r 2.3.1 -profile my_hpc /
  -custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/my_hpc /
  --fasta /data1/maxime/workspace/nf-core/eager/data/reference/Mammoth/Mammoth_MT_Krause.fasta /
  --input /data1/maxime/workspace/nf-core/eager/data/testdata/Mammoth/mammoth_design_fastq.tsv
```

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Stay at home message

* Read the docs -> [<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html](https://www.nextflow.io/docs/latest/config.html)
* Check out the repo -> [<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs)
* Stay tuned for future `nf-core/bytesize`

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Get involved

* Our code is hosted on Github
  * [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
  * [<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs)
* We have Slack
  * [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
  * [<i class="fab fa-slack"></i> nfcore.slack.com/channels/configs](https://nfcore.slack.com/channels/configs)

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-out" data-fragment-index="0"/>
  <a href="https://nf-co.re/community#organisations">
    <img src="/assets/img/svg/institutes_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="0"/></a>
  <a href="https://nf-co.re/community#contributors">
    <img src="/assets/img/slides/nf-core_contributors_jobim.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="1"/></a>
</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Join us

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re)
* [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
* [<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs)
* [<i class="fab fa-slack"></i> nfcore.slack.com/channels/configs](https://nfcore.slack.com/channels/configs)

## References

* [<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html](https://www.nextflow.io/docs/latest/config.html)
* [<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs)