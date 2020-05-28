![Title]({{ site.url }}/assets/img/svg/CIJOE.svg)

<small>
Maxime Garcia

[<i class="fab fa-twitter" aria-hidden="true"></i> @gau](https://twitter.com/gau)

[<i class="fab fa-github" aria-hidden="true"></i> @MaxUlysse](https://github.com/MaxUlysse)

[<i class="fa fa-globe-europe" aria-hidden="true"></i> maxulysse.github.io](https://maxulysse.github.io/)

[<i class="fa fa-globe-europe" aria-hidden="true"></i> {{ site.url }}/coffeencode2020]({{ site.url }}/coffeencode2020)

Coffee n' Code Club - Science for Life Laboratory, Stockholm - 2020/05/28
</small>

---

<a href="https://ki.se/forskning/barntumorbanken"><img class="image-H25" src="/assets/img/svg/BTB_logo.svg" title="Barntumörbanken" alt="Barntumörbanken logo"/></a>

<a href="https://ngisweden.scilifelab.se/" class="fragment"><img class="image-H25" src="/assets/img/svg/NGI_logo.svg" title="NGI" alt="NGI logo"/></a>

<a href="https://www.nbis.se/" class="fragment"><img class="image-H25" src="/assets/img/svg/NBIS_logo.svg" title="NBIS" alt="NBIS logo"/></a>

===

<a href="https://nf-co.re/sarek"><img class="image-H25" src="/assets/img/svg/nf-core_sarek_logo.svg" title="Sarek" alt="Sarek logo"/></a>

---

For me, one fundamental part of Science is it's

<p class="fragment">REPRODUCIBILITY</p>

===

And I think it is central when I'm developing

===

I want my code to run without issues on my machine

<a href="https://github.com/nikku/works-on-my-machine" class="fragment"><img class="image-H25" src="https://cdn.jsdelivr.net/gh/nikku/works-on-my-machine@v0.2.0/badge.svg" title="Works on my machine" alt="works-on-my-machine badge"/></a>

===

But also on other systems

<p class="fragment">And give out the same results</p>

---

## Tools

<ul>
  <li>Versioning</li>
  <li>Containers</li>
  <li>Documentation</li>
  <li class="fragment highlight-green">Tests</li>
</ul>

===

## Different level of tests

- `Unit tests`

- `Integration tests`

===

## Unit tests

Check the functionality of a specific section of code

===

## Integration tests

Check the functionality of several sections of code as a group

---

## First advice

DO TESTS

<iframe class="fragment" width="560" height="315" src="https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"></iframe>

---

## When to do tests

<div class="r-stack">
  <img class="fragment image-H10" src="/assets/img/posts/2020/expanding_brain_1.png" title="Expanding brain meme" alt="Expanding brain meme part 1"/>
  <img class="fragment image-H10" src="/assets/img/posts/2020/expanding_brain_2.png" title="Expanding brain meme" alt="Expanding brain meme part 2"/>
  <img class="fragment image-H10" src="/assets/img/posts/2020/expanding_brain_3.png" title="Expanding brain meme" alt="Expanding brain meme part 3"/>
</div>

---

## Where

|||
|---|---|
|<a href="https://www.jenkins.io/">Jenkins</a>|<i class="fas fa-2x fa-server"></i>|
|<a href="https://circleci.com/">circleci</a>|<i class="fas fa-2x fa-cloud"></i>|
|<a href="https://travis-ci.com/">travis CI</a>|<i class="fas fa-2x fa-cloud"></i>|
|<a href="https://github.com/features/actions">GitHub Actions</a>|<i class="fas fa-2x fa-cloud"></i>|

---

## Second advice

Be lazy and automate

<iframe class="fragment" width="560" height="315" src="https://www.youtube.com/embed/oTz93Y-qeq0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"></iframe>

---

I do that on every project

[maxulysse.github.io](https://github.com/MaxUlysse/maxulysse.github.io)

{% raw %}

```yaml
name: ci
# This workflow is triggered on pushes and PRs to the repository.
on: [push, pull_request]  

jobs:
  htmlproofer:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - name: Checkout submodules
        shell: bash
        run: |
          auth_header="$(git config --local --get http.https://github.com/.extraheader)"
          git submodule sync --recursive
          git -c "http.extraheader=$auth_header" -c protocol.version=2 submodule update --init --force --recursive --depth=1
      - uses: actions/setup-ruby@v1
        with:
          ruby-version: 2.6.x
      - name: Install bundle
        run: bundle install --jobs=3 --retry=3
      - name: Build website
        run: bundle exec jekyll build
      - name: Proof the html
        run: bundle exec htmlproofer ./_site --check-favicon --check-html --url-ignore /\#À/,/\#Ä/ --http-status-ignore=302,999
```

{% endraw %}

---

## For Sarek

[![nf-core CI](https://github.com/nf-core/sarek/workflows/nf-core%20CI/badge.svg)](https://github.com/nf-core/sarek/actions/runs/115584315)

[ci.yml](https://github.com/nf-core/sarek/blob/dev/.github/workflows/ci.yml)

{% raw %}

```yml
name: nf-core CI
# This workflow is triggered on pushes and PRs to the repository.
# It runs the pipeline with the minimal test dataset to check that it completes without any syntax errors.
on: [push, pull_request]

jobs:
  test:
    env:
      NXF_VER: ${{ matrix.nxf_ver }}
      NXF_ANSI_LOG: false
    runs-on: ubuntu-latest
    strategy:
      matrix:
        # Nextflow versions: check pipeline minimum and current latest
        nxf_ver: ['19.10.0', '']
    steps:
      - uses: actions/checkout@v2
      - name: Install Nextflow
        run: |
          wget -qO- get.nextflow.io | bash
          sudo mv nextflow /usr/local/bin/
      - name: Pull docker image
        run: |
          docker pull nfcore/sarek:dev
          docker tag nfcore/sarek:dev nfcore/sarek:dev
      - name: Run test
        run: nextflow run ${GITHUB_WORKSPACE} -profile test,docker
```

{% endraw %}

===

## More tests

{% raw %}

```yml
  tools:
    env:
      NXF_ANSI_LOG: false
    runs-on: ubuntu-latest
    strategy:
      matrix:
        tool: [Haplotypecaller, Freebayes, Manta, mpileup, MSIsensor, Strelka, TIDDIT]
        intervals: [--no_intervals, '']
        exclude:
          - tool: Manta
            intervals: --no_intervals
          - tool: MSIsensor
            intervals: --no_intervals
          - tool: Strelka
            intervals: --no_intervals
          - tool: TIDDIT
            intervals: --no_intervals
    steps:
      - uses: actions/checkout@v2
      - name: Install Nextflow
        run: |
          wget -qO- get.nextflow.io | bash
          sudo mv nextflow /usr/local/bin/
        env:
          # Only check Nextflow pipeline minimum version
          NXF_VER: '19.10.0'
      - name: Pull docker image
        run: docker pull nfcore/sarek:dev
      - name: Run ${{ matrix.tool }} test
        run: nextflow run ${GITHUB_WORKSPACE} -profile test_tool,docker --tools ${{ matrix.tool }} ${{ matrix.intervals }}
```

{% endraw %}

===

## Plenty of tests

Currently 6 different tests with multiple conditions

24 jobs in total

<p class="fragment">And more to come</p>

---

[![Barncancerfonden]({{ site.url }}/assets/img/svg/Barncancerfonden.svg)](https://www.barncancerfonden.se/en/) <!-- .element class="image-H50" --> | [![KI]({{ site.url }}/assets/img/svg/KI.svg)](https://www.ki.se/) <!-- .element class="image-H50" --> | [![Barntumörbanken]({{ site.url }}/assets/img/svg/BTB_logo.svg)](https://ki.se/forskning/barntumorbanken) <!-- .element class="image-H50" --> | [![SciLifeLab]({{ site.url }}/assets/img/svg/SciLifeLab_logo.svg)](https://scilifelab.se/) <!-- .element class="image-H50" --> | [![UPPMAX]({{ site.url }}/assets/img/slides/uppmax.png)](https://uppmax.uu.se/) <!-- .element class="image-H25" -->
:-:|:-:|:-:|:-:|:-:

## Acknowledgments

[![NGI]({{ site.url }}/assets/img/svg/NGI_logo.svg "NGI")](https://ngisweden.scilifelab.se/) <!-- .element class="image-H50" --> | [![NBIS]({{ site.url }}/assets/img/svg/NBIS_logo.svg "NBIS")](https://www.nbis.se/) <!-- .element class="image-H50" --> | [![nf-core]({{ site.url }}/assets/img/svg/nf-core_logo.svg)](https://nf-co.re/) <!-- .element class="image-H25" --> | [![Nextflow]({{ site.url }}/assets/img/slides/nextflow.png "Nextflow")](https://nextflow.io/) <!-- .element class="image-H10" -->
:-:|:-:|:-:|:-:

---

<!-- .slide: data-background="{{ site.url }}/assets/img/background/Stockholm-by-night.jpg" data-state="dim-background" -->

## Any questions

- [<i class="fa fa-globe-europe" aria-hidden="true"></i> nf-co.re](https://nf-co.re/)
- [<i class="fab fa-github" aria-hidden="true"></i> nf-co.re/sarek](https://nf-co.re/sarek)
- [<i class="fab fa-slack" aria-hidden="true"></i> #sarek](https://nfcore.slack.com/channels/sarek)
- [<i class="fab fa-github" aria-hidden="true"></i> nf-co.re/rnafusion](https://nf-co.re/rnafusion)
- [<i class="fab fa-slack" aria-hidden="true"></i> #rnafusion](https://nfcore.slack.com/channels/rnafusion)
