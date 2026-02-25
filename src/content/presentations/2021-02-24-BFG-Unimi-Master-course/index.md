---
title: BFG Unimi Master course
description: nf-core tutorial for the BFG Unimi Master course
date: 2021-02-24
author: maxulysse
duration: 6hours
redirects: ["/bfg2021"]
---
<section data-background-image="{{ site.url }}/assets/img/svg/green_white_bg.svg" data-background-opacity=0.9 >

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re) <!-- .element class="image-H10" -->

## Introduction to nf-core

<small>

Maxime Garcia / [<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau) / [<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[The Swedish Childhood Tumor Biobank](https://ki.se/forskning/barntumorbanken) / [National Genomics Infrastructure](https://ngisweden.scilifelab.se/)

BFG Unimi Master course - online - 2021/02/24-25

</small>

---

[Tutorial](https://nf-co.re/usage/nf_core_tutorial) material originally written for the Nextflow Camp 2019, Barcelona 2019-09-19: ***"Getting started with nf-core"*** _(see [programme](https://www.nextflow.io/nfcamp/2019/phil2.html))._

Updated for the BFG Unimi Master course

Slides: [maxulysse.github.io/bfg2021](https://maxulysse.github.io/bfg2021)

---

## What this tutorial will cover

This tutorial attempts to give an overview of how _nf-core_ works:

* introducing _nf-core_
* how to run _nf-core_ pipelines
* how to use nf-core/tools
* how to better run _nf-core_ pipelines
* how to use configs
* how to write a new pipeline using the _nf-core_ template

---

## Who am I

[![@maxulysse]({{ site.url }}/assets/img/slides/maxulysse.jpeg)](https://github.com/maxulysse) <!-- .element class="image-25 avatar" -->

Bioinformatician working at [National Genomics Infrastructure](https://ngisweden.scilifelab.se).

---

[<i class="fa fa-globe-europe"></i> ngisweden.scilifelab.se/resources/ngi-stockholm-status](https://ngisweden.scilifelab.se/resources/ngi-stockholm-status/)

<iframe width="1120" height="580" src="https://ngisweden.scilifelab.se/resources/ngi-stockholm-status/" frameborder="0"></iframe>

---

## What is _nf-core_

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZfxOFYXmiNw?start=139" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)

---

## Exercise 1

### Running a nf-core pipeline with some test data

```bash
nextflow run nf-core/sarek -r 2.7 -profile test,docker
```

---

## Exercise 2

### Installing the nf-core helper tools

[<i class="fa fa-globe-europe"></i> Tutorial](https://nf-co.re/usage/nf_core_tutorial#installing-the-nf-core-helper-tools)

* Install nf-core/tools
* Use the help flag to list the available commands

The Python `nf-core` tool is available from the [Python Package Index](https://pypi.org/project/nf-core/) and [Bioconda](https://bioconda.github.io/recipes/nf-core/README.html).

You can install the latest released version from `PyPI` as follows:

```bash
pip install nf-core
```

Or this command to install the `dev` version:

```bash
pip install --upgrade --force-reinstall git+https://github.com/nf-core/tools.git@dev
```

---

## Exercise 3

### Listing pipelines

[<i class="fa fa-globe-europe"></i> Tutorial](https://nf-co.re/usage/nf_core_tutorial#listing-available-nf-core-pipelines)

* Use the help flag to print the list command usage
* List all pipelines
* Sort pipelines alphabetically, then by popularity (stars)
* Fetch one of the pipelines using `nextflow pull`
* Use `nf-core list` to see if the pipeline you pulled is up to date
* Filter pipelines for those that work with RNA
* Save these pipeline details to a JSON file

---

## Running nf-core pipelines

### Software requirements for nf-core pipelines

In order to run _nf-core_ pipelines, you will need to have ([Nextflow](https://www.nextflow.io/)).

The only other requirement is a software packaging tool:

* [Conda](https://docs.conda.io/en/latest/miniconda.html)
* [Docker](https://www.docker.com)
* [Singularity](https://sylabs.io/singularity/)

---

## Fetching pipeline

```bash
nextflow pull nf-core/sarek
```

```bash
nextflow pull nf-core/sarek -r 2.7
```

---

## Usage instructions and documentation

General documentation and instructions for Nextflow and _nf-core_: [https://nf-co.re](https://nf-co.re)

Pipeline specific documentation: (_e.g._ [nf-co.re/sarek](https://nf-co.re/sarek))

In addition to this documentation, each pipeline comes with basic command line reference.

This can be seen by running the pipeline with the `--help` flag, for example:

```bash
nextflow run nf-core/sarek --help
```

---

## Running pipelines with test data

```bash
nextflow run nf-core/sarek -r 2.7 -profile test,docker
```

---

## The nf-core launch command

> _NB: This is an experimental feature

```bash
nf-core launch sarek
```

---

## Using nf-core pipelines offline

```bash
nf-core download sarek
```

---

## Exercise 3 (using pipelines)

* Install required dependencies (Nextflow, Docker)
* Print the command-line usage instructions for the _nf-core/sarek_ pipeline
* In a new directory, run the _nf-core/sarek_ pipeline with the provided test data
* Try launching the sarek pipeline using the `nf-core launch` command
* Download the _nf-core/sarek_ pipeline for offline use using the `nf-core download` command

---

## Config profiles

<iframe width="560" height="315" src="https://www.youtube.com/embed/cXBYusdjrc0?start=92" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Creating nf-core pipelines

---

### Conclusion

We hope that this _nf-core_ tutorial has been helpful!
Remember that there is more in-depth documentation on many of these topics available on the [nf-core website](https://nf-co.re).
If in doubt, please ask for help on Slack.

If you have any suggestions for how to improve this tutorial, or spot any mistakes, please create an issue or pull request on the [nf-core/nf-co.re repository](https://github.com/nf-core/nf-co.re).

> [Phil Ewels](https://github.com/ewels/), [Maxime Garcia](https://github.com/MaxUlysse) for _nf-core_, February 2021
