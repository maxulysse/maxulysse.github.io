---
title: "Running pipelines offline"
description: "Presentation about running nf-core pipelines offline"
date: 2021-04-13
author: "maxulysse"
tags: ["nextflow", "nf-core", "offline", "presentation", "bytesize"]
image:
  path: "/assets/img/category/nf-core_bytesize.png"
---

[![nf-core](https://maxulysse.github.io/assets/img/svg/nf-core_bytesize8_logo.svg "nf-core-bytesize")](https://nf-co.re) <!-- .element class="image-H10" -->

## Running pipelines offline

<small>

Maxime Garcia / [<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau) / [<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[The Swedish Childhood Tumor Biobank](https://ki.se/forskning/barntumorbanken) / [National Genomics Infrastructure](https://ngisweden.scilifelab.se/)

[<i class="fa fa-globe-europe"></i> nf-co.re/events/2021/bytesize-8-nf-core-offline](https://nf-co.re/events/2021/bytesize-8-nf-core-offline), online - 2021/04/13

</small>

Note:

Working for The Swedish Childhood Tumor Biobank, located at KI, and sitting half-time at National Genomics Infrastructure from Scilifelab

---

## Today's plan

* Download a DSL1 pipeline
  * Main container + extra containers
* Download a DSL2 pipeline
  * Containers from all modules
* Download AWS iGenomes
* Transfer all to an offline machine
* Run pipelines

---

## Today's workflow

<img src="/assets/img/svg/offline.svg" title="Offline set-up" alt="Offline set-up" class="image-75"/>

Note:

This fictional set up is based on UPPMAX rackham / bianca servers

---

## Install nf-core tools

on the machine that can communicate to the offline machine

```bash
$ ssh -X user@online.server.com

$ pip3 install --upgrade --force-reinstall git+https://github.com/nf-core/tools.git@dev --user

[...]

$ nf-core --version

[...]

nf-core, version 1.14.dev0
```

---

## Download DSL1 pipeline

```bash
$ nf-core download sarek -r 2.7 -s

[...]

INFO     Saving sarek
          Pipeline release: '2.7'
          Pull singularity containers: 'Yes'
          Output file: 'nf-core-sarek-2.7.tar.gz'
INFO     Downloading workflow files from GitHub
INFO     Downloading centralised configs from GitHub
INFO     Fetching container names for workflow
INFO     Found 3 containers
INFO     Tip: Set env var $NXF_SINGULARITY_CACHEDIR to use a central cache for container downloads
Pulling singularity images ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% • 3/3 completed
INFO     Compressing download..
INFO     Command to extract files: tar -xzf nf-core-sarek-2.7.tar.gz
INFO     MD5 checksum for nf-core-sarek-2.7.tar.gz: 2c4eac95b88a3977e1c4a81524f35ca3
```

---

## Download Singularity images

```bash
$ singularity pull --name nfcore-sareksnpeff-2.7.GRCh38.img docker://nfcore/sareksnpeff:2.7.GRCh38
$ singularity pull --name nfcore-sarekvep-2.7.GRCh38.img docker://nfcore/sarekvep:2.7.GRCh38

INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
Getting image source signatures
[...]
Writing manifest to image destination
Storing signatures
[...]
INFO:    Creating SIF file...
```

Note:

* The main Singularity container was downloaded with nf-core tools
* But as I was downloading extra containers anyway, I could have downloaded it this way too

---

## Download DSL2 pipeline

```bash
$ nf-core download rnaseq -r 3.0 -s -p 10 --compress none

[...]

INFO     Saving rnaseq
         Pipeline release: '3.0'
         Pull singularity containers: 'Yes'
         Output file: 'nf-core-rnaseq-3.0.tar.gz'

INFO     Downloading workflow files from GitHub
INFO     Downloading centralised configs from GitHub
INFO     Fetching container names for workflow
INFO     Found 29 containers
INFO     Tip: Set env var $NXF_SINGULARITY_CACHEDIR to use a central cache for container downloads
Pulling singularity images ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% • 29/29 completed
```

---

## Download the rest

```bash
$ wget \
https://github.com/nextflow-io/nextflow/releases/download/v21.04.0-edge/nextflow-21.04.0-edge-all

$ aws s3 --no-sign-request --region eu-west-1 \
sync s3://ngi-igenomes/igenomes/Homo_sapiens/GATK/GRCh38 .

$ aws s3 --no-sign-request --region eu-west-1 \
sync s3://ngi-igenomes/igenomes/Homo_sapiens/NCBI/GRCh38 .
```

---

## Transfer via sftp to offline machine

```bash
$ sftp user@offline.server.com:user
[...]
Connected to offline.server.com.
Changing to: /user

sftp> put nextflow-21.04.0-edge-all .
[...]

sftp> put nf-core-sarek-2.7.tar.gz .
[...]

sftp> put nfcore-sareksnpeff-2.7.GRCh38.img .
[...]

sftp> put nfcore-sarekvep-2.7.GRCh38.img .
[...]

sftp> put -r nf-core-rnaseq-3.0 .
[...]

sftp> put -r igenomes .
[...]
```

---

## Run the pipeline

<small style="color:red;">

> EDIT: No need to set up `--custom_config_base`
>
> nf-core `tools` does that for you

</small>

```bash
export NXF_SINGULARITY_CACHEDIR=/path/to/nf-core-sarek-2.7/singularity-images
nextflow run sarek/workflow/main.nf -profile offline [...]  \
    --igenomes_base /path/to/igenomes
```

Can add to the offline profile:

* Path to local AWS iGenomes
* `cacheDir` setting to the `singularity` scope

```bash
nextflow run rnaseq/workflow/main.nf -profile offline [...]
```

---

## Tips

* Set env var `$NXF_SINGULARITY_CACHEDIR` to use a central cache for container downloads
* Use parallel for faster download
* Use `--compress none`

---

## Stay at home message

* Read the docs
  * [<i class="fa fa-globe-europe"></i> nf-co.re/usage/offline](https://nf-co.re/usage/offline)
  * [<i class="fa fa-globe-europe"></i> nf-co.re/tools#downloading-pipelines-for-offline-use](https://nf-co.re/tools#downloading-pipelines-for-offline-use)
  * [<i class="fa fa-globe-europe"></i> nf-co.re/tools#singularity-cache-directory](https://nf-co.re/tools#singularity-cache-directory)
* Stay tuned for future `nf-core/bytesize`

Note:

* Reads the docs, try things out, and don't hesitate to ask questions
* More talks are coming

---

## Get involved

[<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)

<img src="/assets/img/svg/social_media_2021.svg" title="GitHub, Slack, Twitter and YouTube" alt="GitHub, Slack, Twitter and YouTube"/>

Note:

* Join us on Github
* Join our Slack
* Follow us on Twitter
* Follow us on Youtube

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2021.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-out" data-fragment-index="0"/>
  <a href="https://nf-co.re/community#organisations">
    <img src="/assets/img/svg/institutes_2021.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="0"/></a>
  <a href="https://nf-co.re/community#contributors">
    <img src="/assets/img/slides/nf-core_contributors_2021_02.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="1"/></a>
</div>

Note:

* Thank institutes and sponsors + collaborators
* Thank all nf-core contributors

---

<section data-background-image="https://maxulysse.github.io/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Join us

* [<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)

## References

* [<i class="fa fa-globe-europe"></i> nf-co.re/usage/offline](https://nf-co.re/usage/offline)
* [<i class="fa fa-globe-europe"></i> nf-co.re/tools#downloading-pipelines-for-offline-use](https://nf-co.re/tools#downloading-pipelines-for-offline-use)
* [<i class="fa fa-globe-europe"></i> nf-co.re/tools#singularity-cache-directory](https://nf-co.re/tools#singularity-cache-directory)

* [<i class="fas fa-images"></i> maxulysse.github.io/bytesize_8](https://maxulysse.github.io/bytesize_8)

Note:

Here are some important links, including the docs, and the slides for this talk on my website
If you have any question, now is the time