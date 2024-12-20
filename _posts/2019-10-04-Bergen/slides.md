<section data-background-image="{{ site.url }}/assets/img/background/Sarek-Park-02.jpg" data-background-opacity=0.5 >

# Sarek

## a workflow to detect germline and somatic mutations in WGS/WES

Maxime Garcia

<small>

[<i class="fab fa-twitter"></i> @gau](https://twitter.com/gau)

[<i class="fab fa-github"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe"></i> maxulysse.github.io](https://maxulysse.github.io/)

</small>

4th Scandinavian Seminar on Translational Pathology

<small>
Solstrand, Bergen - 2019/10/24
</small>

---

[![Barntumörbanken]({{ site.url }}/assets/img/svg/barntumorbanken_logo.svg "Barntumörbanken")](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H10" -->

Swedish Childhood Tumor Biobank

---

[![SciLifeLab]({{ site.url }}/assets/img/svg/scilifelab_logo.svg "SciLifeLab")](https://scilifelab.se/) <!-- .element class="image-H10" -->

National centre for molecular biosciences with focus on health and environmental research

[![KI]({{ site.url }}/assets/img/svg/ki_logo.svg)](https://ki.se/) <!-- .element class="image-H75" --> | [![KTH]({{ site.url }}/assets/img/svg/kth_logo.svg)](https://www.kth.se/) <!-- .element class="image-H75" --> | [![SU]({{ site.url }}/assets/img/svg/su_logo.svg)](https://www.su.se/) <!-- .element class="image-H75" --> | [![UU]({{ site.url }}/assets/img/svg/uu_logo.svg)](https://www.uu.se/) <!-- .element class="image-H75" -->
:-:|:-:|:-:|:-:

Note:

* SciLifeLab is several infrastructures

===

[![NGI]({{ site.url }}/assets/img/svg/ngi_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H10" -->

* State-of-the-art infrastructure
  * Sequencing (DNA, RNA ...)
* Guidelines and support
  * Sample collection, study design, protocol selection
  * Bioinformatics analysis

===

[![NBIS]({{ site.url }}/assets/img/svg/nbis_logo.svg "NBIS")](https://www.nbis.se/) <!-- .element class="image-H10" -->

* Swedish ELIXIR node
* Bioinformatics support for Swedish researchers

---

## What is Sarek

<div class="fragment fade-in" data-fragment-index="2">

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

[![Sarek]({{ site.url }}/assets/img/svg/nf-core_sarek_logo.svg "Sarek")](https://nf-co.re/sarek) <!-- .element class="image-H10" -->

<div class="fragment fade-in" data-fragment-index="2">

* Open-Source Nextflow Pipeline
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

## Software dependencies

[![Bioconda]({{ site.url }}/assets/img/svg/bioconda_logo.svg)](https://bioconda.github.io/) <!-- .element class="image-H75" --> | [![Docker]({{ site.url }}/assets/img/svg/docker_logo.svg)](https://www.docker.com/) <!-- .element class="image-H75" --> | [![Singularity]({{ site.url }}/assets/img/svg/singularity_logo.svg)](https://sylabs.io/singularity/) <!-- .element class="image-H75" -->
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

## Preprocessing

[![GATKBP]({{ site.url }}/assets/img/svg/gatk-bp_logo.svg "GATK Best Practices")](https://software.broadinstitute.org/gatk/best-practices/) <!-- .element class="image-H25" -->

Based on GATK Best Practices (GATK 4.1.2.0)

<div class="fragment fade-in" data-fragment-index="2">

* Reads mapped to reference genome with `bwa`
* Duplicates marked with `picard MarkDuplicates`
* Recalibrate with `GATK BaseRecalibrator`

</div>

===

## Germline Variant Calling

* SNVs and small indels
  * HaplotypeCaller
  * Strelka2
* Structural variants
  * Manta
  * TIDDIT

===

## Somatic Variant Calling

* SNVs and small indels
  * Mutect2
  * Strelka2
  * Freebayes
* Structural variants
  * Manta
* Sample heterogeneity, ploidy and CNVs
  * ASCAT
  * Control-FREEC

===

## Annotation

* VEP and SnpEff
  * <i class="fas fa-database"></i> ClinVar, COSMIC, dbSNP, GENCODE, gnomAD, polyphen, sift, etc.

===

## Reports

[![MultiQC]({{ site.url }}/assets/img/svg/multiqc_logo.svg "MultiQC")](https://multiqc.info/) <!-- .element class="image-H25" -->

---

## Workflow

[![Sarek Workflow]({{ site.url }}/assets/img/svg/sarek_workflow_2.5.svg "Sarek Workflow 2.5")](https://github.com/nf-core/sarek/releases/tag/2.5) <!-- .element class="image-25" -->

---

## Prioritization

* First step towards clinical use
* Rank scores are computed for all variants
  * COSMIC, ClinVar, SweFreq and MSK-IMPACT (cancerhotspots.org)
* Findings are ranked
  * Well known, high-impact variants
  * Variants in known cancer-related genes
  * Remaining variants

---

## What's next

* More tools
  * Mutational signatures
  * More downstream processing of the final vcf files
  * Connection to [Scout](https://www.clinicalgenomics.se/scout/)
* More genomes
  * Mouse
  * Dog
  * Cattle

Note:

* Scout is a tool developed by SciLifeLab Clinical Genomics to analyse VCF files

---

[![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg "nf-core")](https://nf-co.re/) <!-- .element class="image-25" -->

* Collection of High Quality Nextflow Pipelines
  * Strict guidelines
  * Extensive documentation
  * CI testing
  * Shared configuration

---

## Sarek usage

* Within BTB
  * Tumor/normal pairs

* In production at NGI
  * All normal samples
  * Tumor/normal pairs

* The whole SweGen dataset
  * 1 000 normal samples (GRCh38)

* Genome Medicine Sweden

Note:

* GMS is an initiative to implement Precision Medicine at a national level

---

## Preprint in BioRxiv

Sarek: A portable workflow for whole-genome sequencing analysis of germline and somatic variants

<small>

Maxime Garcia, Szilveszter Juhos, Malin Larsson, Pall I Olason, Marcel Martin, Jesper Eisfeldt, Sebastian DiLorenzo, Johanna Sandgren, Teresita Diaz de Ståhl, Valtteri Wirta, Monica Nistèr, Björn Nystedt, Max Käller

</small>

[<i class="ai ai-doi"></i> doi.org/10.1101/316976](https://doi.org/10.1101/316976)

---

## Get involved

* Our code is hosted on Github
  * [<i class="fab fa-github"></i> github.com/nf-core](https://github.com/nf-core)
  * [<i class="fab fa-github"></i> github.com/nf-core/sarek](https://github.com/nf-core/sarek)
* We have slack
  * [<i class="fab fa-slack"></i> nfcore.slack.com](https://nfcore.slack.com/)
  * [<i class="fab fa-slack"></i> nfcore.slack.com/channels/sarek](https://nfcore.slack.com/channels/sarek)

---

[![Barncancerfonden]({{ site.url }}/assets/img/svg/barncancerfonden_logo.svg)](https://www.barncancerfonden.se/en/) <!-- .element class="image-H75" --> | [![KI]({{ site.url }}/assets/img/svg/ki_logo.svg)](https://www.ki.se/) <!-- .element class="image-H75" --> | [![Barntumörbanken]({{ site.url }}/assets/img/svg/barntumorbanken_logo.svg)](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H75" --> | [![SciLifeLab]({{ site.url }}/assets/img/svg/scilifelab_logo.svg)](https://scilifelab.se/) <!-- .element class="image-H75" --> | [![UPPMAX]({{ site.url }}/assets/img/slides/uppmax.png)](https://uppmax.uu.se/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:|:-:

## Acknowledgments

<small>

Barntumörbanken | NGI | NBIS | Clinical Genomics | nf-core
:-:|:-:|:-:|:-:|:-:
Szilveszter Juhos | Johannes Alneberg | Malin Larsson | Hassan Foroughi Asl | Paolo Di Tommaso
Monica Nistèr | Phil Ewels | Marcel Martin | Valtteri Wirta | Sven Fillinger
Johanna Sandgren | Carl Rubin | Markus Mayrhofer | | Alexander Peltzer
Teresita Díaz De Ståhl | Max Käller | Björn Nystedt | |

</small>

[![NGI]({{ site.url }}/assets/img/svg/ngi_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H75" --> | [![NBIS]({{ site.url }}/assets/img/svg/nbis_logo.svg "NBIS")](https://www.nbis.se/) <!-- .element class="image-H75" --> | [![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg)](https://nf-co.re/) <!-- .element class="image-H75" --> | [![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://www.nextflow.io/) <!-- .element class="image-75" -->
:-:|:-:|:-:|:-:

---

<section data-background-image="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-background-opacity=0.5 >

## Any questions

* [<i class="fa fa-globe-europe"></i> nf-co.re](https://nf-co.re/)
* [<i class="fab fa-github"></i> github.com/nf-core/sarek](https://github.com/nf-core/sarek)
* [<i class="fab fa-slack"></i> nfcore.slack.com/channels/sarek](https://nfcore.slack.com/channels/sarek)
