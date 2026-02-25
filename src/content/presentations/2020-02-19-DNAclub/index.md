---
title: Sarek and rnafusion, to detect variants and fusion genes
description: Presentation of Sarek and rnafusion at the DNA Club
date: 2020-02-18
author: maxulysse
duration: 10min
location:
  city: Stockholm
  country: Sweden
---
<section data-background-image="{{ site.url }}/assets/img/background/Sarek-Park-01.jpg" data-background-opacity=0.5 >

# Sarek and rnafusion

## Detect variants and fusion genes

Maxime Garcia

<small>

[<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau)

[<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe"></i> maxulysse.github.io](https://maxulysse.github.io/)

</small>

DNA Club

<small>
Science for Life Laboratory, Stockholm - 2020/02/19
</small>

---

## What is Sarek

<section data-background-image="{{ site.url }}/assets/img/background/Sarek-beer.jpg" data-background-opacity=0.5 >

<div class="fragment fade-in">

A [National Park](https://www.sverigesnationalparker.se/en/choose-park---list/sarek-national-park/) in Northern Sweden.

<small>

* Long, deep, narrow valleys and wild, turbulent water
* A tortuous delta landscape
* Completely lacking in comfortable accommodations
* One of Sweden’s most inaccessible national parks
* There are no roads leading up to the national park

</small>

</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Sarek-Park-02.jpg">

---

<a href="https://nf-co.re/sarek"><img class="image-25" src="/assets/img/svg/nf-core_sarek_logo.svg" title="Sarek" alt="Sarek logo"/></a>

<div class="fragment fade-in" data-fragment-index="2">

* Open-Source Nextflow Pipeline
  * Part of nf-core
  * Developed at NGI
  * In collaboration with NBIS
  * Support from Barntumörbanken

</div>

===

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

<div class="fragment fade-in" data-fragment-index="2">

* Workflow manager
  * Data driven language
  * Portable (executable on multiple platforms)
  * Shareable and reproducible (with containers)

</div>

===

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg)](https://nf-co.re/) <!-- .element class="image-50" -->

<div class="fragment fade-in" data-fragment-index="2">

* Collection of High Quality Nextflow Pipelines
  * Strict guidelines
  * Extensive documentation
  * CI testing
  * Shared configuration

</div>

===

## Software dependencies

[![Bioconda]({{ site.url }}/assets/img/svg/bioconda_logo.svg)](https://bioconda.github.io/) <!-- .element class="image-50" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-50" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-50" -->
:-:|:-:|:-:

<div class="fragment fade-in" data-fragment-index="2">

* All tools are installed with Bioconda, which allow set up of a new environment
* Bundled into a Docker container, which Nextflow can automatically download from DockerHub
* Built from the Docker container, Singularity images can solve HPC container problems

</div>

===

## Reference genomes

[AWS iGenomes](https://registry.opendata.aws/aws-igenomes/)

* GRCh37
* GRCh38
* GRCm38

---

## Multiple flavors

![Sarek]({{ site.url }}/assets/img/svg/sarek_logo.svg "Sarek") <!-- .element class="image-10" -->

<div class="fragment fade-in" data-fragment-index="2">

![Sarek]({{ site.url }}/assets/img/svg/sarek-germline.svg "Sarek") <!-- .element class="image-10" --> | ![Sarek]({{ site.url }}/assets/img/svg/sarek-somatic.svg "Sarek") <!-- .element class="image-10" -->
:-:|:-:

</div>

===

## WES and Targeted Sequencing

![]({{ site.url }}/assets/img/svg/appleseq.svg "WGS, WES, and Targeted") <!-- .element class="image-25" -->

---

## Workflow

[![Sarek Workflow]({{ site.url }}/assets/img/svg/sarek_workflow_2.5.svg "Sarek Workflow 2.5")](https://github.com/nf-core/sarek/releases/tag/2.5) <!-- .element class="image-25" -->

---

## Publication in F1000Research

Sarek: A portable workflow for whole-genome sequencing analysis of germline and somatic variants
[version 1; peer review: awaiting peer review]

<small>

Maxime Garcia, Szilveszter Juhos, Malin Larsson, Pall I. Olason, Marcel Martin,
Jesper Eisfeldt, Sebastian DiLorenzo, Johanna Sandgren, Teresita Díaz De Ståhl,
Philip Ewels, Valtteri Wirta, Monica Nistér, Max Käller, Björn Nystedt

</small>

[<i class="ai ai-doi"></i> doi.org/10.12688/f1000research.16665.1](https://doi.org/10.12688/f1000research.16665.1)

---

## What's next

* More tools
  * Prioritization of variants
  * Mutational signatures
  * More downstream processing of the final vcf files
  * Connection to [Scout](https://www.clinicalgenomics.se/scout/)
* More genomes
  * Dog
  * Cattle
* More refactoring
  * DSL 2

Note:

* Scout is a tool developed by SciLifeLab Clinical Genomics to analyse VCF files

---

[![rnafusion]({{ site.url }}/assets/img/svg/nf-core_rnafusion_logo.svg "rnafusion")](https://nf-co.re/rnafusion) <!-- .element class="image-25" -->

<div class="fragment fade-in" data-fragment-index="2">

* Open-Source Nextflow Pipeline
  * Part of nf-core
  * Developed at NGI
  * Support from Barntumörbanken

</div>

<div class="fragment fade-in" data-fragment-index="3">

<small>

Project initiated by [Rickard Hammarén](https://github.com/Hammarn),
fully matured under [Martin Proks](https://github.com/matq007),
shamelessly taken over by me.

</small>

</div>

===

Run and gather outputs from

* Arriba
* EricScript
* FusionCatcher
* Pizzly
* Squid
* STAR-Fusion

<div class="fragment fade-in" data-fragment-index="2">

Generate a nice final report

</div>

---

## Get involved

* Our code is hosted on Github
  * [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
  * [<i class="fab fa-github"></i> github.com/nf-core/sarek](https://github.com/nf-core/sarek)
  * [<i class="fab fa-github"></i> github.com/nf-core/rnafusion](https://github.com/nf-core/rnafusion)
* We have Slack
  * [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
  * [<i class="fab fa-slack"></i> #sarek](https://nfcore.slack.com/channels/sarek)
  * [<i class="fab fa-slack"></i> #rnafusion](https://nfcore.slack.com/channels/rnafusion)

---

[![Barncancerfonden]({{ site.url }}/assets/img/svg/barncancerfonden_logo.svg)](https://www.barncancerfonden.se/en/) <!-- .element class="image-H75" --> | [![KI]({{ site.url }}/assets/img/svg/ki_logo.svg)](https://www.ki.se/) <!-- .element class="image-H75" --> | [![Barntumörbanken]({{ site.url }}/assets/img/svg/barntumorbanken_logo.svg)](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H75" --> | [![SciLifeLab]({{ site.url }}/assets/img/svg/scilifelab_logo.svg)](https://scilifelab.se/) <!-- .element class="image-H75" --> | [![UPPMAX]({{ site.url }}/assets/img/slides/uppmax.png)](https://uppmax.uu.se/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:|:-:

## Acknowledgments

<small>

Barntumörbanken        | NGI               | NBIS             | Clinical Genomics   | nf-core
:---------------------:|:-----------------:|:----------------:|:-------------------:|:-:
Szilveszter Juhos      | Johannes Alneberg | Malin Larsson    | Hassan Foroughi Asl | Paolo Di Tommaso
Monica Nistèr          | Phil Ewels        | Marcel Martin    | Valtteri Wirta      | Sven Fillinger
Johanna Sandgren       | Carl Rubin        | Markus Mayrhofer |                     | Alexander Peltzer
Teresita Díaz De Ståhl | Pär Lundin        | Björn Nystedt    |                     | Harshil Patel
Martin Proks           |                   |                  |                     |

</small>

[![NGI]({{ site.url }}/assets/img/svg/ngi_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H75" --> | [![NBIS]({{ site.url }}/assets/img/svg/nbis_logo.svg "NBIS")](https://www.nbis.se/) <!-- .element class="image-H75" --> | [![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg)](https://nf-co.re/) <!-- .element class="image-H75" --> | [![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)
* [<i class="fab fa-github"></i> nf-co.re/sarek](https://nf-co.re/sarek)
* [<i class="fab fa-slack"></i> #sarek](https://nfcore.slack.com/channels/sarek)
* [<i class="fab fa-github"></i> nf-co.re/rnafusion](https://nf-co.re/rnafusion)
* [<i class="fab fa-slack"></i> #rnafusion](https://nfcore.slack.com/channels/rnafusion)
