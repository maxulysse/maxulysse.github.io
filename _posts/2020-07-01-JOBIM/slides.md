<img src="/assets/img/svg/nf-core_jobim2020.svg" title="nf-core, a community effort for collaborative, peer-reviewed analysis pipelines" alt="nf-core logo + presentation title"/>

<small>

<br>
 
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

## Reproducibility

<div class="fragment fade-in">

[![Figure 1]({{ site.url }}/assets/img/slides/gigascience_giy077_fig1.jpg "figure 1")](https://academic.oup.com/view-large/figure/118918033/giy077fig1.jpg) <!-- .element class="image-50" -->

[<i class="ai ai-doi"></i> 10.1093/gigascience/giy077](https://doi.org/10.1093/gigascience/giy077)

</div>

---

[![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-50" -->

<div class="fragment fade-in">

* Workflow manager
  * Data driven language
  * Portable (executable on multiple platforms)
  * Shareable and reproducible (with containers or virtual environments)

</div>

===

## Data driven language

<div class="fragment fade-in">

DAG depends on the data, and is calculated on the go

</div>

<div class="fragment fade-in">

In `snakemake` it's the other way around

</div>

<div class="fragment fade-in">

DAG depends on the target, and is calculated before execution

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
  <img src="/assets/img/svg/institutes_2020.svg" title="Institutes part of nf-core in 2020" alt="38 institutes part of nf-core in 2020" class="fragment fade-in" data-fragment-index="2"/>
</div>

Note:

Started in late 2017 early 2018.

NGI had been developing analysis pipelines for several years and using a set of standards

This helped other group run the pipelines on their own

Swedish research groups at first, but later on other groups and core genomics facilities too such as QBIC in Tübingen

Pipelines began to outgrow the SciLifeLab and NGI branding

nf-core was created and all relevant pipelines moved to this new GitHub Organisation

The early days of nf-core were greatly shaped by Phil Ewels (@ewels), Alex Peltzer (@apeltzer), Sven Fillinger (@sven1103) and Andreas Wilm (@andreas-wilm)
Without them, the project would not exist

===

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)

<div class="fragment fade-in">

* [<i class="fas fa-laptop-code"></i> 4 Hackathons](https://nf-co.re/events)
  * [Next one is online from July 13th till 17th](https://nf-co.re/events/2020/hackathon-july-2020)

</div>

===

* [<i class="fa fa-globe-europe"></i> nf-co.re/join](https://nf-co.re/join)

<div class="fragment fade-in">

* [<i class="fab fa-twitter"></i> @nf_core](https://twitter.com/nf_core) - 1 273 followers

</div>

<div class="fragment fade-in">

* [<i class="fab fa-youtube"></i> @nf-core](https://www.youtube.com/c/nf-core) - 147 subscribers

</div>

<div class="fragment fade-in">

* [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/) - 136 active users

</div>

===

* [<i class="fab fa-github"></i> @nf-core](https://github.com/nf-core/) - 165 members

<div class="fragment fade-in">
* [25 released pipelines - 14 under development](https://nf-co.re/pipelines)

</div>

---

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-50" -->

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

[![nf-core tools]({{ site.url }}/assets/img/svg/nf-core-tools_logo.svg "nf-core tools")](https://nf-co.re/tools) <!-- .element class="image-50" -->

===

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

Pipeline template and companion tools help to validate your code and simplify common tasks

[![nf-core create]({{ site.url }}/assets/img/slides/nf-core_create_jobim.png "nf-core create")](https://nf-co.re/tools#creating-a-new-workflow) <!-- .element class="image-75" -->

Note:

nf-core create can be used to create non nf-core pipeline, and is a good help to start with a minimal skeleton

---

## <i class="fas fa-industry"></i> Facilities

Highly optimised pipelines with excellent reporting

Validated releases ensure reproducibility

===

## <i class="fas fa-users"></i> Users

Portable, documented and easy to use workflows

Pipelines that you can trust

===

## <i class="fas fa-laptop-code"></i> Developers

Companion templates and tools help to validate your code and simplify common tasks

---

[![Barncancerfonden]({{ site.url }}/assets/img/svg/barncancerfonden_logo.svg)](https://www.barncancerfonden.se/en/) <!-- .element class="image-H75" --> | [![KI]({{ site.url }}/assets/img/svg/ki_logo.svg)](https://www.ki.se/) <!-- .element class="image-H75" --> | [![Barntumörbanken]({{ site.url }}/assets/img/svg/barntumorbanken_logo.svg)](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H75" --> | [![SciLifeLab]({{ site.url }}/assets/img/svg/scilifelab_logo.svg)](https://scilifelab.se/) <!-- .element class="image-H75" --> | [![UPPMAX]({{ site.url }}/assets/img/slides/uppmax.png)](https://uppmax.uu.se/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:|:-:

## Acknowledgments

[![NGI]({{ site.url }}/assets/img/svg/ngi_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H75" --> | [![NBIS]({{ site.url }}/assets/img/svg/nbis_logo.svg "NBIS")](https://www.nbis.se/) <!-- .element class="image-H75" --> | [![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg)](https://nf-co.re/) <!-- .element class="image-H75" --> | [![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

- [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)
- [<i class="fab fa-github"></i> nf-co.re/sarek](https://nf-co.re/sarek)
- [<i class="fab fa-slack"></i> #sarek](https://nfcore.slack.com/channels/sarek)
- [<i class="fab fa-github"></i> nf-co.re/rnafusion](https://nf-co.re/rnafusion)
- [<i class="fab fa-slack"></i> #rnafusion](https://nfcore.slack.com/channels/rnafusion)

</section>
