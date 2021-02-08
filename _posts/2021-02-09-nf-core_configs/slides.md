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

<div class="fragment fade-in">

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

</div>

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

<div class="fragment fade-in">

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

</div>

---

## With profiles

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html#config-profiles](https://www.nextflow.io/docs/latest/config.html#config-profiles)

```text
nextflow run nf-core/eager -r 2.3.1 -profile test_tsv,docker
```

<div class="fragment fade-in">

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

</div>

===

## With singularity

[<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html#config-profiles](https://www.nextflow.io/docs/latest/config.html#config-profiles)

```text
nextflow run nf-core/eager -r 2.3.1 -profile test_tsv,singularity
```

<div class="fragment fade-in">

> `singularity`
>
> ```groovy
> singularity.enabled = true
> singularity.autoMounts = true
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

</div>

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
nextflow run nf-core/eager -r 2.3.1 -c my_hpc.config --project MUG_210209 /
  --genome false /
  --fasta /data1/maxime/workspace/nf-core/eager/data/reference/Mammoth/Mammoth_MT_Krause.fasta /
  --input /data1/maxime/workspace/nf-core/eager/data/testdata/Mammoth/mammoth_design_fastq.tsv
```

<div class="fragment fade-in">

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

</div>

---

## Let's make a profile

[<i class="fab fa-github"></i> github.com/nf-core/configs#adding-a-new-config](https://github.com/nf-core/configs#adding-a-new-config)

<div class="fragment fade-in">

`nf-core/configs/conf/my_hpc.config`

</div>

<div class="fragment fade-in">

`nf-core/configs/nfcore_custom.config`

```groovy
  my_hpc       { includeConfig "${params.custom_config_base}/conf/my_hpc.config" }
```

</div>

<div class="fragment fade-in">

__NB:__ Don't forget docs and CI tests.

_cf_ [<i class="fab fa-github"></i> github.com/MaxUlysse/nf-core_configs/tree/my_hpc](https://github.com/MaxUlysse/nf-core_configs/tree/my_hpc)

</div>

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

  withLabel: PROCESS_LABEL {
    maxRetries = 3
    memory = 110.GB
    cpus = 20
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

```text
nextflow run nf-core/eager -r 2.3.1 -profile my_hpc --project MUG_210209 / 
  -custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/my_hpc /
  --genome false /
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

## Get involved

[<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)

<img src="/assets/img/svg/social_media_2021.svg" title="GitHub, Slack, Twitter and YouTube" alt="GitHub, Slack, Twitter and YouTube"/>

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2021.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-out" data-fragment-index="0"/>
  <a href="https://nf-co.re/community#organisations">
    <img src="/assets/img/svg/institutes_2021.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="0"/></a>
  <a href="https://nf-co.re/community#contributors">
    <img src="/assets/img/slides/nf-core_contributors_2021_02.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="1"/></a>
</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Join us

* [<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)

## References

* [<i class="fa fa-globe-europe"></i> nextflow.io/docs/latest/config.html](https://www.nextflow.io/docs/latest/config.html)
* [<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs)
* [<i class="fas fa-images"></i> maxulysse.github.io/bytesize_2](https://maxulysse.github.io/bytesize_2)
* [<i class="fab fa-github"></i> github.com/MaxUlysse/nf-core_configs/tree/my_hpc](https://github.com/MaxUlysse/nf-core_configs/tree/my_hpc)
