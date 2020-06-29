<img src="/assets/img/svg/nf-core_jobim2020.svg" title="nf-core, a community effort for collaborative, peer-reviewed analysis pipelines" alt="nf-core logo + presentation title"/>

<small>

Maxime Garcia

[<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau)

[<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe"></i> {{ site.url }}/jobim2020]({{ site.url }}/jobim2020)

[JOBIM 2020](https://jobim2020.sciencesconf.org/) - Montpellier, France [virtual] - 2020/07/01
</small>

---

<div class="r-stack">
    <a href="https://ki.se/forskning/barntumorbanken" class="fragment fade-out" data-fragment-index="0"><img src="/assets/img/svg/barntumorbanken_logo.svg" title="Barntumörbanken" alt="Barntumörbanken logo" class="image-10"/></a>
    <a href="https://ki.se" class="fragment fade-in" data-fragment-index="0"><img src="/assets/img/svg/ki_logo.svg" title="Karolinska Institutet" alt="Karolinska Institutet logo" class="image-10"/></a>
</div>

<div class="r-stack">
  <a href="https://ngisweden.scilifelab.se/" class="fragment fade-in-then-out"><img src="/assets/img/svg/ngi_logo.svg" title="NGI" alt="NGI logo" class="image-10"/></a>
  <a href="https://www.nbis.se/" class="fragment fade-in-then-out"><img src="/assets/img/svg/nbis_logo.svg" title="NBIS" alt="NBIS logo" class="image-10"/></a>

  <a href="https://www.scilifelab.se/" class="fragment fade-in"><img src="/assets/img/svg/scilifelab_logo.svg" title="SciLifeLab" alt="SciLifeLab logo" class="image-10"/></a>
</div>

Note:

Working for Barntumörbanken (the Swedish Childhood Tumor Biobank), at the Karolinska Institute

Sitting half time at NGI (the National Genomics Infrastructure) to collaborate on developing pipelines

And collaborating with NBIS (the National Bioinformatics Infrastructure Sweden)

Which are both infrastructures within Science For Life Laboratory, a Swedish national center for large-scale research.

---

## Reproducibility is central

<div class="fragment fade-in">

[![Figure 1]({{ site.url }}/assets/img/slides/gigascience_giy077_fig1.jpg "figure 1")](https://academic.oup.com/view-large/figure/118918033/giy077fig1.jpg) <!-- .element class="image-50" -->

[<i class="ai ai-doi"></i> 10.1093/gigascience/giy077](https://doi.org/10.1093/gigascience/giy077)

</div>

---

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

<div class="fragment fade-in">

* Workflow manager
  * Data driven language
  * Portable
    * executable on multiple platforms
  * Shareable and reproducible
    * with containers or virtual environments

</div>

===

## Data driven language

<div class="fragment fade-in">

The execution graph depends on the input data,

and is calculated on the go

</div>

<div class="fragment fade-in">

In `snakemake` it's the other way around

</div>

<div class="fragment fade-in">

The execution graph depends on the final target,

and is calculated before launch

</div>

===

## Portability

<div class="fragment fade-in">

* <i class="fas fa-server"></i> Sun Grid Engine, SLURM, PBS/Torque, OAR ...

</div>

<div class="fragment fade-in">

* <i class="fas fa-cloud"></i> AWS Batch, Kubernetes, Google Life Sciences

</div>

<div class="fragment fade-in">

[Nextflow docs on executors](https://www.nextflow.io/docs/latest/executor.html)

</div>

Note:

Nextflow supports main schedulers on premise or in the cloud

===

## Reproducibility

<div class="fragment fade-in">

[![Conda]({{ site.url }}/assets/img/svg/conda_logo.svg)](https://docs.conda.io/) <!-- .element class="image-50" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-50" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-50" -->
:-:|:-:|:-:

</div>

Note:

Nextflow also supports modules, pod

---

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-50" -->

===

<div class="r-stack">
  <img src="/assets/img/svg/institutes_2017.svg" title="Institutes part of nf-core in 2017" alt="3 institutes part of nf-core in 2017" class="fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2018.svg" title="Institutes part of nf-core in 2018" alt="12 institutes part of nf-core in 2018" class="fragment fade-in-then-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2019.svg" title="Institutes part of nf-core in 2019" alt="27 institutes part of nf-core in 2019" class="fragment fade-in-then-out" data-fragment-index="1"/>
  <img src="/assets/img/svg/institutes_2020.svg" title="Institutes part of nf-core in 2020" alt="39 institutes part of nf-core in 2020" class="fragment fade-in" data-fragment-index="2"/>
</div>

Note:

3 - 12 - 27 - 39

Started in late 2017 Phil Ewels (NGI), Alex Peltzer (QBiC), Sven Fillinger (QBiC) and Andreas Wilm (A*STAR)

NGI had been developing analysis pipelines for years and using a set of standards

This helped other group run the pipelines on their own

Swedish research groups at first, but later on other groups and core genomics facilities too

Pipelines began to outgrow the SciLifeLab/NGI branding

nf-core was created and all relevant pipelines moved to this new GitHub Organisation

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

===

[<i class="fa fa-globe-europe"></i> https://nf-co.re/pipelines](https://nf-co.re/pipelines)

<div class="r-stack">
  <img src="/assets/img/slides/nf-core_latest_pipelines_20200629.png" title="nf-core latest released pipelines" alt="nf-core latest released pipelines" class="image-50 fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/slides/nf-core_starred_pipelines_20200629.png" title="nf-core most starred pipelines" alt="nf-core most starred pipelines" class="image-50 fragment fade-in" data-fragment-index="0"/>
</div>

---

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-50" -->

[<i class="fa fa-globe-europe"></i> https://nf-co.re/developers/guidelines](https://nf-co.re/developers/guidelines)

## Pipeline requirements

* Nextflow based
* Common structure (based on the nf-core template)
* Stable release tags
* MIT license (can be used even in commercial settings)
* Software bundled for reproducibility
* Continuous Integration testing (e.g. GitHub Actions)

Note:
nf stands for Nextflow
core for the core facilities

Our community is closely tied to Nextflow
We do follow Nextflow development, and consult regularly with the developers

---

[![nf-core tools]({{ site.url }}/assets/img/svg/nf-core-tools_logo.svg "nf-core tools")](https://github.com/nf-core/tools) <!-- .element class="image-50" -->

===

[<i class="fa fa-globe-europe"></i> https://nf-co.re/tools](https://nf-co.re/tools)

A companion tool to help with common tasks

* [nf-core list](https://nf-co.re/tools#listing-pipelines) - List available pipelines
* [nf-core launch](https://nf-co.re/tools#launch-a-pipeline) - Run pipeline with interactive prompts
* [nf-core download](https://nf-co.re/tools#downloading-pipelines-for-offline-use) - Download pipeline for offline use
* [nf-core licences](https://nf-co.re/tools#pipeline-software-licences) - List software licences in a pipeline
* [nf-core create](https://nf-co.re/tools#creating-a-new-workflow) - Create a new workflow from the template
* [nf-core lint](https://nf-co.re/tools#linting-a-workflow) - Check pipeline code against guidelines
* ...

===

## Making a pipeline

[<i class="fa fa-globe-europe"></i> https://nf-co.re/tools#creating-a-new-workflow](https://nf-co.re/tools#creating-a-new-workflow)

Pipeline template and companion tools help to validate your code and simplify common tasks

[![nf-core create]({{ site.url }}/assets/img/slides/nf-core_create_jobim.png "nf-core create")](https://nf-co.re/tools#creating-a-new-workflow) <!-- .element class="image-75" -->

Note:

nf-core create can be used to create non nf-core pipeline, and is a good help to start with a minimal skeleton

===

## Software dependencies

[![Bioconda]({{ site.url }}/assets/img/svg/bioconda_logo.svg)](https://bioconda.github.io/) <!-- .element class="image-50" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-50" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-50" -->
:-:|:-:|:-:

<div class="fragment fade-in">

* All tools are installed with Conda/Bioconda
  * which allow set up of a new environment
* Bundled into a Docker container
  * which Nextflow can automatically download from DockerHub
* Built from the Docker container
  * Singularity images can solve HPC container problems

</div>

---

## Configurations

All pipelines come with a default sensible configuration for a regular sized HPC.

<div class="fragment fade-in">

[<i class="fab fa-github"></i> nf-core/configs](https://github.com/nf-core/configs/) allows shared configurations between pipelines at an institutional level

* cpus, time and memory requirements
* scheduler
* queues
* environments
* path to common references files
* ...

</div>

---

## Coming Next

<div class="fragment fade-in">

* Graphical user interface to launch pipelines

* Modules with `Nextflow DSL 2`

* Testing on real life data for each pipelines releases on AWS

</div>

---

## [<i class="fas fa-laptop-code"></i> Hackathons](https://nf-co.re/events)

[<i class="fa fa-globe-europe"></i> https://nf-co.re/events](https://nf-co.re/events)

<div class="fragment fade-in">

[![Hackathon at Crick 2020]({{ site.url }}/assets/img/slides/nf-core_hackathon_crick2020.jpg "Hackathon at Crick 2020")](https://nf-co.re/events/2020/hackathon-francis-crick-2020) <!-- .element class="image-50" -->

Next one is online from July 13th to 17th:

[<i class="fa fa-globe-europe"></i> https://nf-co.re/events/2020/hackathon-july-2020](https://nf-co.re/events/2020/hackathon-july-2020)

</div>

---

## Stay at home message

===

* <i class="fas fa-industry"></i> Facilities
  * Highly optimised pipelines with excellent reporting
  * Validated releases ensure reproducibility
* <i class="fas fa-users"></i> Users
  * Portable, documented and easy to use workflows that you can trust
* <i class="fas fa-laptop-code"></i> Developers
  * Companion templates and tools help to validate your code and simplify common tasks

---

<div class="r-stack">
  <img src="/assets/img/svg/acknowledgments_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="fragment fade-out" data-fragment-index="0"/>
  <img src="/assets/img/svg/institutes_2020.svg" title="Acknowledgements" alt="Acknowledgements" class="fragment fade-in" data-fragment-index="0"/>
</div>

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)
* [<i class="fab fa-github"></i> @nf-core](https://github.com/nf-core)
* [<i class="fab fa-twitter"></i> @nf_core](https://twitter.com/nf_core)
* [<i class="fab fa-youtube"></i> @nf-core](https://www.youtube.com/c/nf-core)
* [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
