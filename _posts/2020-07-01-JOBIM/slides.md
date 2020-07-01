<img src="/assets/img/svg/nf-core_jobim2020.svg" title="nf-core, a community effort for collaborative, peer-reviewed analysis pipelines" alt="nf-core logo + presentation title" class="image-75"/>

<small>

Maxime Garcia

[<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau)

[<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe"></i> maxulysse.github.io/jobim2020]({{ site.url }}/jobim2020)

[JOBIM 2020](https://jobim2020.sciencesconf.org/) - Montpellier, France [virtual] - 2020/07/01
</small>

---

[![Barntumörbanken]({{ site.url }}/assets/img/svg/barntumorbanken_logo.svg "Barntumörbanken")](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H10" -->

The Swedish Childhood Tumor Biobank

[![KI]({{ site.url }}/assets/img/svg/ki_logo.svg "KI")](https://ki.se) <!-- .element class="image-H10" -->

Note:

* Working for The Swedish Childhood Tumor Biobank located at KI

---

[![NGI]({{ site.url }}/assets/img/svg/ngi_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H10" -->

* State-of-the-art infrastructure
  * Sequencing (DNA, RNA ...)
* Guidelines and support
  * Sample collection, study design, protocol selection
  * Bioinformatics analysis

Note:

* NGI is a sequencing facility used by researchers all over Sweden

===

[![SciLifeLab]({{ site.url }}/assets/img/svg/scilifelab_logo.svg "SciLifeLab")](https://scilifelab.se/) <!-- .element class="image-H10" -->

National centre for molecular biosciences with focus on health and environmental research

[![KI]({{ site.url }}/assets/img/svg/ki_logo.svg)](https://ki.se/) <!-- .element class="image-H75" --> | [![KTH]({{ site.url }}/assets/img/svg/kth_logo.svg)](https://www.kth.se/) <!-- .element class="image-H75" --> | [![SU]({{ site.url }}/assets/img/svg/su_logo.svg)](https://www.su.se/) <!-- .element class="image-H75" --> | [![UU]({{ site.url }}/assets/img/svg/uu_logo.svg)](https://www.uu.se/) <!-- .element class="image-H75" -->
:-:|:-:|:-:|:-:

Note:

* SciLifeLab is several infrastructures
* NGI collaborates a lot with NBIS the National Bioinformatics Infrastructure Sweden which is the local Elixir node

---

## Reproducibility is central

[![Figure 1]({{ site.url }}/assets/img/slides/gigascience_giy077_fig1.jpg "figure 1")](https://academic.oup.com/view-large/figure/118918033/giy077fig1.jpg) <!-- .element class="image-50" -->

[<i class="ai ai-doi"></i> 10.1093/gigascience/giy077](https://doi.org/10.1093/gigascience/giy077)

Note:

* For me, as a bioinformatician it is a crucial matter

---

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

* Workflow manager
  * Data driven language
  * Portable
    * executable on multiple platforms
  * Shareable and reproducible
    * with containers or virtual environments

Note:

* Early adopters of Nextflow for its portability, shareability and of course reproducibility

===

## <i class="fas fa-project-diagram"></i> Data driven language

The execution graph depends on the input data,

and is calculated on the go

<div class="fragment fade-in">

In `snakemake` it's the other way around

</div>

<div class="fragment fade-in">

The execution graph depends on the final target,

and is calculated before launch

</div>

Note:

* Execution graph = the way to link all the different tools within the pipeline
* For me, this is the main difference between Snakemake and Nextflow

===

## Portability

[www.nextflow.io/docs/latest/executor.html](https://www.nextflow.io/docs/latest/executor.html)

* <i class="fas fa-server"></i> Sun Grid Engine, SLURM, PBS/Torque, OAR ...

* <i class="fas fa-cloud"></i> AWS Batch, Kubernetes, Google Life Sciences

Note:

* Nextflow supports main schedulers on HPCs or in the cloud

===

## Reproducibility

[![Conda]({{ site.url }}/assets/img/svg/conda_logo.svg)](https://docs.conda.io/) <!-- .element class="image-50" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-50" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-50" -->
:-:|:-:|:-:

Note:

* Nextflow supports container engines and virtual environments

---

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-50" -->

---

<div class="r-stack">
  <img src="/assets/img/svg/institutes_2017.svg" title="Institutes part of nf-core in 2017" alt="3 institutes part of nf-core in 2017" class="fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2018.svg" title="Institutes part of nf-core in 2018" alt="12 institutes part of nf-core in 2018" class="fragment fade-in-then-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2019.svg" title="Institutes part of nf-core in 2019" alt="27 institutes part of nf-core in 2019" class="fragment fade-in-then-out" data-fragment-index="1"/>
  <img src="/assets/img/svg/institutes_2020.svg" title="Institutes part of nf-core in 2020" alt="39 institutes part of nf-core in 2020" class="fragment fade-in" data-fragment-index="2"/>
</div>

Note:

3 - 12 - 27 - 39

* NGI had been developing analysis pipelines for years and using a set of standards

* This helped other group run the pipelines on their own

* Pipelines began to outgrow the SciLifeLab/NGI branding

* In late 2017, nf-core was created, thanks to Phil Ewels (NGI), Alex Peltzer (QBiC), Sven Fillinger (QBiC) and Andreas Wilm (A*STAR)

* All relevant pipelines were moved to this new GitHub organisation

===

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-25" -->

[<i class="fa fa-globe-europe"></i> https://nf-co.re/join](https://nf-co.re/join)

<div class="fragment fade-in">

[<i class="fab fa-twitter"></i> @nf_core](https://twitter.com/nf_core)

</div>

<div class="fragment fade-in">

[<i class="fab fa-youtube"></i> @nf-core](https://www.youtube.com/c/nf-core)

</div>

<div class="fragment fade-in">

[<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)

</div>

<div class="fragment fade-in">

[<i class="fab fa-github"></i> @nf-core](https://github.com/nf-core/)

</div>

Note:

* As a community we are active on twitter
* We're using YouTube more and more especially nowadays
* Always using Slack a lot (probably too much in my case)
* And of course GitHub

===

[<i class="fa fa-globe-europe"></i> https://nf-co.re/pipelines](https://nf-co.re/pipelines)

<div class="r-stack">
  <img src="/assets/img/slides/nf-core_latest_pipelines_20200629.png" title="nf-core latest released pipelines" alt="nf-core latest released pipelines" class="image-50 fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/slides/nf-core_starred_pipelines_20200629.png" title="nf-core most starred pipelines" alt="nf-core most starred pipelines" class="image-50 fragment fade-in" data-fragment-index="0"/>
</div>

Note:

* Our website has pages for each pipeline that renders the documentation available on github

* 24 released pipelines, and 14 in development

* Most recently released

* Most starred

---

## Pipeline requirements

[<i class="fa fa-globe-europe"></i> https://nf-co.re/developers/guidelines](https://nf-co.re/developers/guidelines)

* Nextflow based
* Common structure (based on the nf-core template)
* Stable release tags
* MIT license (can be used even in commercial settings)
* Software bundled for reproducibility
* Continuous Integration testing (e.g. GitHub Actions)

Note:

* Our community is closely tied to Nextflow

---

[![nf-core tools]({{ site.url }}/assets/img/svg/nf-core-tools_logo.svg "nf-core tools")](https://github.com/nf-core/tools) <!-- .element class="image-50" -->

===

## A companion tool

[<i class="fa fa-globe-europe"></i> https://nf-co.re/tools](https://nf-co.re/tools)

* [nf-core list](https://nf-co.re/tools#listing-pipelines) - List available pipelines
* [nf-core launch](https://nf-co.re/tools#launch-a-pipeline) - Run pipeline with interactive prompts
* [nf-core download](https://nf-co.re/tools#downloading-pipelines-for-offline-use) - Download pipeline for offline use
* [nf-core licences](https://nf-co.re/tools#pipeline-software-licences) - List software licences in a pipeline
* [nf-core create](https://nf-co.re/tools#creating-a-new-workflow) - Create a new pipeline from the template
* [nf-core lint](https://nf-co.re/tools#linting-a-workflow) - Check pipeline code against guidelines
* ...

Note:

* We provide a companion tool to help with common tasks

===

## Making a pipeline

[<i class="fa fa-globe-europe"></i> https://nf-co.re/tools#creating-a-new-workflow](https://nf-co.re/tools#creating-a-new-workflow)

[![nf-core create]({{ site.url }}/assets/img/slides/nf-core_create_jobim.png "nf-core create")](https://nf-co.re/tools#creating-a-new-workflow) <!-- .element class="image-75" -->

Note:

* nf-core create can be used to create non nf-core pipeline, and
* it is a good help to start with a minimal skeleton
* with at least a MultiQC process for reporting
* we're working on making it less specific to nf-core to help the whole Nextflow community

===

## Software dependencies

[![Bioconda]({{ site.url }}/assets/img/svg/bioconda_logo.svg)](https://bioconda.github.io/) <!-- .element class="image-50" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-50" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-50" -->
:-:|:-:|:-:

* All tools are installed with Conda/Bioconda
  * Allows set up of a new environment
* Bundled into a Docker container
  * Nextflow can automatically download from DockerHub
* Built from the Docker container
  * Singularity images can solve HPC container problems

Note:

* We do recommend to publish tools using bioconda and are involved within the community
* This setting allow for an easy update of tools, and easy usage of all the different technologies depending on the system

---

## Configurations

All pipelines come with a default sensible configuration for a regular sized HPC

<div class="fragment fade-in">

[<i class="fab fa-github"></i> github.com/nf-core/configs](https://github.com/nf-core/configs/) allows shared configurations between pipelines for a specific HPC

* cpus, time and memory requirements
* scheduler
* queues
* environments
* path to common references files
* ...

</div>

Note:

* This allows anyone using a nf-core pipeline in a infrastructure, or anyone else in the same infrastructure to easily any nf-core pipeline

---

## Coming soon

* Full-sized dataset testing for pipeline releases on AWS

* Graphical user interface to launch pipelines

* Modules with `Nextflow DSL 2`

Note:

* We do collaborate with Nextflow developers, and are up to date with the latest developments
* Nextflow DSL 2 will allow for more modular pipelines similar to the snakemake rules

---

## <i class="fas fa-users-cog"></i> Core team

[![@alneberg]({{ site.url }}/assets/img/slides/alneberg.jpeg)](https://github.com/alneberg) <!-- .element class="image-50 avatar" --> | [![@apeltzer]({{ site.url }}/assets/img/slides/apeltzer.jpeg)](https://github.com/apeltzer) <!-- .element class="image-50 avatar" --> | [![@drpatelh]({{ site.url }}/assets/img/slides/drpatelh.jpeg)](https://github.com/drpatelh) <!-- .element class="image-50 avatar" --> | [![@ewels]({{ site.url }}/assets/img/slides/ewels.jpeg)](https://github.com/ewels) <!-- .element class="image-50 avatar" -->
:-:|:-:|:-:|:-:
Johannes Alneberg | Alexander Peltzer | Harshil Patel | Phil Ewels

[![@maxulysse]({{ site.url }}/assets/img/slides/maxulysse.jpeg)](https://github.com/maxulysse) <!-- .element class="image-50 avatar" --> | [![@olgabot]({{ site.url }}/assets/img/slides/olgabot.jpeg)](https://github.com/olgabot) <!-- .element class="image-50 avatar" --> | [![@sven1103]({{ site.url }}/assets/img/slides/sven1103.jpeg)](https://github.com/sven1103) <!-- .element class="image-50 avatar" --> | [![@ggabernet]({{ site.url }}/assets/img/slides/ggabernet.jpeg)](https://github.com/ggabernet) <!-- .element class="image-50 avatar" -->
:-:|:-:|:-:|:-:
Maxime Garcia | Olga Botvinnik | Sven Fillinger | Gisela Gabernet

<small>

The nf-core framework for community-curated bioinformatics pipelines

[Nat Biotechnology (2020)](https://www.nature.com/articles/s41587-020-0439-x); [<i class="ai ai-doi"></i> 10.1038/s41587-020-0439-x](https://doi.org/10.1038/s41587-020-0439-x)

</small>

---

## <i class="fas fa-chart-bar"></i> Extensive statistics

[<i class="fa fa-globe-europe"></i> https://nf-co.re/stats](https://nf-co.re/stats)

[![nf-core stats]({{ site.url }}/assets/img/slides/nf-core_stats_jobim.png "nf-core stats")](https://nf-co.re/stats) <!-- .element class="image-50" -->

Note:

* Phil loves to make stats

---

## <i class="fas fa-laptop-code"></i> Hackathons

[<i class="fa fa-globe-europe"></i> https://nf-co.re/events](https://nf-co.re/events)

[![Hackathon at Crick 2020]({{ site.url }}/assets/img/slides/nf-core_hackathon_crick2020.jpg "Hackathon at Crick 2020")](https://nf-co.re/events/2020/hackathon-francis-crick-2020) <!-- .element class="image-50" -->

<div class="fragment fade-in">

Next one is online from July 13th to 17th:

[<i class="fa fa-globe-europe"></i> https://nf-co.re/events/2020/hackathon-july-2020](https://nf-co.re/events/2020/hackathon-july-2020)

</div>

---

## <i class="fas fa-home"></i> Stay at home message

===

* <i class="fas fa-industry"></i> Facilities
  * Highly optimised pipelines with excellent reporting
  * Validated releases ensure reproducibility
* <i class="fas fa-users"></i> Users
  * Portable, documented and easy to use pipelines
  * Easy to share between different collaborators
* <i class="fas fa-laptop-code"></i> Developers
  * Companion templates and tools help to validate your code and simplify common tasks

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-then-out" data-fragment-index="0"/>
  <img src="/assets/img/slides/nf-core_contributors_jobim.png" title="Acknowledgements" alt="Acknowledgements" class="image-75 fragment fade-in-fade-out" data-fragment-index="1"/>
</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)
* [<i class="fa fa-globe-europe"></i> maxulysse.github.io/jobim2020]({{ site.url }}/jobim2020)
* [<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)
* [<i class="fa fa-globe-europe"></i> nf-co.re/events/2020/hackathon-july-2020](https://nf-co.re/events/2020/hackathon-july-2020)
* [<i class="fab fa-github"></i> @nf-core](https://github.com/nf-core)
* [<i class="fab fa-twitter"></i> @nf_core](https://twitter.com/nf_core)
* [<i class="fab fa-youtube"></i> @nf-core](https://www.youtube.com/c/nf-core)
* [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
