---
title: Sarek, a workflow to detect germline and somatic mutations in WGS/WES
description: Presentation of Sarek for Victorian Cancer Bioinformatics Symposium 2020
date: 2020-10-28
author: maxulysse
duration: 3min
redirects: ["/vcbs2020"]
---
<section data-background-image="{{ site.url }}/assets/img/background/Sarek-Park-02.jpg" data-background-opacity=0.5 >

[![Sarek]({{ site.url }}/assets/img/svg/nf-core_sarek_logo.svg "Sarek")](https://nf-co.re/sarek) <!-- .element class="image-H10" -->

## a workflow to detect germline and somatic mutations in WGS/WES

<small>

Maxime Garcia / [<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau) / [<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe"></i> maxulysse.github.io/vcbs2020]({{ site.url }}/vcbs2020)

[The Swedish Childhood Tumor Biobank](https://ki.se/forskning/barntumorbanken) / [National Genomics Infrastructure](https://ngisweden.scilifelab.se/)

[Victorian Cancer Bioinformatics Symposium 2020](http://viccancerbioinfsymposium.org/), Victoria, Australia [virtual] - 2020/10/28

</small>

---

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

* Workflow manager
  * Data driven language
  * Portable
    * executable on multiple platforms
  * Shareable and reproducible
    * with containers or virtual environments
    * `Docker`, `Singularity` or `conda`

---

[![Sarek]({{ site.url }}/assets/img/svg/nf-core_sarek_logo.svg "Sarek")](https://nf-co.re/sarek) <!-- .element class="image-H10" -->

* Open-Source [Nextflow](https://www.nextflow.io/) Pipeline
* Started at [SciLifeLab](https://scilifelab.se/)
  * [National Genomics Infrastructure](https://ngisweden.scilifelab.se/)
  * [National Bioinformatics Infrastructure Sweden](https://www.nbis.se/)
* Support from [The Swedish Childhood Tumor Biobank](https://ki.se/forskning/barntumorbanken)
* Part of the [nf-core](https://nf-core) community
* Support from [QBiC](https://qbic.life)

---

## Workflow

[![Sarek Workflow]({{ site.url }}/assets/img/svg/sarek_workflow_2.6.1.svg "Sarek Workflow 2.6.1")](https://github.com/nf-core/sarek/releases/tag/2.6.1) <!-- .element class="image-25" -->

---

## Try it now

[Quick start guide](https://nf-co.re/sarek/dev#quick-start)

On your own computer with test data:

```bash
curl -s https://get.nextflow.io | bash

nextflow run nf-core/sarek -r 2.6.1 -profile docker,test
```

Start your own analysis:

```bash
nextflow run nf-core/sarek -r 2.6.1 -profile docker --input sample.tsv --genome GRCh38
```

---

## What is coming soon

* DSL 2 ([dsl2](https://github.com/nf-core/sarek/tree/dsl2)) with [@ggabernet](https://github.com/ggabernet) and [@FriederikeHanssen](https://github.com/FriederikeHanssen)
* Validation tests
* More tools
* Sub-workflows for specific usage
  * Improved cloud usage
  * Improved usage for non-model organism
  * Joint Variant Calling
* More downstream processing of the final vcf files

---

## Publication in F1000Research

Sarek: A portable workflow for whole-genome sequencing</br>
analysis of germline and somatic variants</br>
[version 2; peer review: 2 approved]

<small>

Maxime Garcia, Szilveszter Juhos, Malin Larsson, Pall I. Olason, Marcel Martin,</br>
Jesper Eisfeldt, Sebastian DiLorenzo, Johanna Sandgren, Teresita Díaz De Ståhl,</br>
Philip Ewels, Valtteri Wirta, Monica Nistér, Max Käller, Björn Nystedt

</small>

[<i class="ai ai-doi"></i> doi.org/10.12688/f1000research.16665.2](https://doi.org/10.12688/f1000research.16665.2)

---

## Get involved

* Our code is hosted on Github
  * [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
  * [<i class="fab fa-github"></i> github.com/nf-core/sarek](https://github.com/nf-core/sarek)
* We have slack
  * [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
  * [<i class="fab fa-slack"></i> nfcore.slack.com/channels/sarek](https://nfcore.slack.com/channels/sarek)

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-out" data-fragment-index="0"/>
  <a href="https://nf-co.re/community#organisations">
    <img src="/assets/img/svg/institutes_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="0"/></a>
  <a href="https://nf-co.re/community#contributors">
    <img src="/assets/img/slides/nf-core_contributors_jobim.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="1"/></a>
  <a href="https://nf-co.re/sarek/stats#contributors">
    <img src="/assets/img/slides/nf-core_sarek_contributors_2.6.1.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="2"/></a>
</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re)
* [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
* [<i class="fa fa-globe-europe"></i> nf-co.re/sarek](https://nf-co.re/sarek)
* [<i class="fab fa-github"></i> github.com/nf-core/sarek](https://github.com/nf-core/sarek)
* [<i class="fab fa-slack"></i> nfcore.slack.com/channels/sarek](https://nfcore.slack.com/channels/sarek)
