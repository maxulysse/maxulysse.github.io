---
layout: post
title: Adding a Sarek specific config for a specific system
description: Adding to nf-core/configs extra configuration at a pipeline level
date: 2019-11-21 11:00
tags:
  - Nextflow
  - Sarek
  - Sentieon
  - nf-core
author: maxulysse
image:
  path: /assets/img/category/nf-core.png
---

I was recently working on [`nf-core/sarek`](https://github.com/nf-core/sarek) to add [Sentieon](https://www.sentieon.com/) possibilities.
I added `Senteion` specific processes and channels, only used if a `--sentieon` params is specified on the command line.
While developing on our server `munin`, I managed, on a branch on my fork, how to access our installation of `Sentieon` via [environment modules](http://modules.sourceforge.net/).
Now that my [PR#66](https://github.com/nf-core/sarek/pull/66) is open, I figured that it would be an improvement if all `sarek`/`munin` configuration was included within the same `munin` profile in [nf-core/configs](https://github.com/nf-core/configs).
Within `nf-core/configs`, we have configuration at an institutional level across all pipelines.
What I wanted was to have that at a pipeline level.

## First step: enabling loading of the pipeline config file within the pipeline

Very similar to the way we're loading custom profiles from different Institutions, but now it's done at a pipeline level:

```groovy
// Load nf-core/sarek custom profiles from different Institutions
try {
  includeConfig "${params.custom_config_base}/pipeline/sarek.config"
} catch (Exception e) {
  System.err.println("WARNING: Could not load nf-core/config/sarek profiles: ${params.custom_config_base}/pipeline/sarek.config")
}
```

Of course, this file need needs to be created on the nf-core/configs repository.

## Second step: creating the main pipeline config file

That file will load the institution's configuration.

```groovy
profiles {
  munin { includeConfig "${params.custom_config_base}/conf/pipeline/sarek/munin.config" }
}
```

`${params.custom_config_base}` is taken from the `nfcore_custom.config` file loading the configuration files for all pipelines.

```groovy
params.custom_config_version = 'master'
params.custom_config_base = "https://raw.githubusercontent.com/nf-core/configs/${params.custom_config_version}"
profiles {
// [...]
  munin        { includeConfig "${params.custom_config_base}/conf/munin.config" }
// [...]
}
```

## Third step: creating the pipeline system specific config file

Just a regular `Nextflow` configuration file.
All params in this file will overwrite the one already existing, _ie_ the ones that could already be specified within the classical `munin.config` file.
In our case, it's just two params: `config_profile_contact` and `config_profile_description` that way, when `nf-core/sarek` is launched on `munin`, the user will notice there's an extra level of configuration.

Then, just need to add the params that are `sarek` specific, and loading the `Sentieon` module.

```groovy
// Profile config names for nf-core/configs

params {
  // Specific nf-core/configs params
  config_profile_contact = 'Maxime Garcia (@MaxUlysse)'
  config_profile_description = 'nf-core/sarek MUNIN profile provided by nf-core/configs'

  // Specific nf-core/sarek configs params
  max_memory = 752.GB
  max_cpus = 46
  max_time = 72.h

  // Specific nf-core/sarek params
  annotation_cache = true
  pon = '/data1/PON/vcfs/BTB.PON.vcf.gz'
  pon_index = '/data1/PON/vcfs/BTB.PON.vcf.gz.tbi'
  snpEff_cache = '/data1/cache/snpEff/'
  vep_cache = '/data1/cache/VEP/'
}

// Specific nf-core/sarek process configuration
process {
  withLabel:sentieon {
    beforeScript = {params.sentieon ? 'module load sentieon/201808.05' : ''}
    container = {params.sentieon ? '' : 'nfcore/sarek:dev'}
  }
}
```

## Tests

Both following commands worked as expected on munin.

```bash
nextflow run MaxUlysse/sarek -r sentieon -profile test,munin --sentieon /
--custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/sarek
```

```bash
nextflow run MaxUlysse/sarek -r sentieon -profile test,munin /
--custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/sarek
```

All new params were used, and the `Sentieon` specific module was only loaded (and container set to '' ) for all processes with the `sentieon` label when the `params.sentieon` was specified.

---

On any other system, the first command is failing, because `Sentieon` is not available, but the second worked as before.

```bash
nextflow run MaxUlysse/sarek -r sentieon -profile test,docker --sentieon /
--custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/sarek
```

```bash
nextflow run MaxUlysse/sarek -r sentieon -profile test,docker /
--custom_config_base https://raw.githubusercontent.com/MaxUlysse/nf-core_configs/sarek
```
