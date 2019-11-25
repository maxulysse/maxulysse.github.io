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

> EDIT: Thanks a lot to [@jfy133](https://github.com/jfy133) for helping clarifying this post.

I was recently working on [`nf-core/sarek`](https://github.com/nf-core/sarek) to add [Sentieon](https://www.sentieon.com/) possibilities.
I added `Senteion` specific processes and channels, but only if a `--sentieon` param is specified on the command line.

While developing on our server `munin`, I used our local [environment modules](http://modules.sourceforge.net/) to access our installation of `Sentieon`.
Now that my [PR#66](https://github.com/nf-core/sarek/pull/66) is open, I figured that it would be an improvement if the `sarek`/`munin` specific configuration was included in the `munin` profile already shared with [nf-core/configs](https://github.com/nf-core/configs).

However, within [`nf-core/configs`](https://github.com/nf-core/configs), configuration is at an institutional level across all pipelines.
What I wanted was to have institutional configuration at a pipeline level.

For this, we have to modify/create the following files:

* The [`nextflow.config`](https://github.com/nf-core/sarek/blob/master/nextflow.config) file in [`nf-core/sarek`](https://github.com/nf-core/sarek)
* A [`pipeline/sarek.config`](https://github.com/nf-core/configs/blob/master/pipeline/sarek.config) in the [`nf-core/configs`](nf-core/configs)
* A [`conf/pipeline/sarek/munin.config`](https://github.com/nf-core/configs/blob/master/conf/pipeline/sarek/munin.config), also in the [`nf-core/configs`](nf-core/configs)

## Enable loading of the pipeline config file within the pipeline

> In [`nextflow.config @ nf-core/sarek`](https://github.com/nf-core/sarek/blob/master/nextflow.config)

In a similar way custom profiles from different Institutions are loaded, now an extra loading step loads a new pipeline level.

```groovy
// Load nf-core/sarek custom profiles from different Institutions
try {
  includeConfig "${params.custom_config_base}/pipeline/sarek.config"
} catch (Exception e) {
  System.err.println("WARNING: Could not load nf-core/config/sarek profiles: ${params.custom_config_base}/pipeline/sarek.config")
}
```

That will load (when the `try` statement is executed) the newly sarek specific configuration file on the (`nf-core/configs`)[https://github.com/nf-core/configs] repository which now needs to be created.

## Create the main pipeline config file

> Create [`pipeline/sarek.config @ nf-core/configs`](https://github.com/nf-core/configs/blob/master/pipeline/sarek.config)

We create the new config file pointed to in the previous step: [`pipeline/sarek.config`](https://github.com/nf-core/configs/blob/master/pipeline/sarek.config), this time in (`nf-core/configs`)[https://github.com/nf-core/configs].

This file will then tell sarek where to look for the sarek pipeline-specific institutional profiles within the (`nf-core/configs`)[https://github.com/nf-core/configs] repository.

Be sure to use the same profile to load both the institutional configuration file and the institutional pipeline-specific configuration file.

```groovy
profiles {
  munin { includeConfig "${params.custom_config_base}/conf/pipeline/sarek/munin.config" }
}
```

> `${params.custom_config_base}` is taken from the `nfcore_custom.config` file, which loads the configuration files for all pipelines.
>
>  ```groovy
> params.custom_config_version = 'master'
> params.custom_config_base = "https://raw.githubusercontent.com/nf-core/configs/${params.custom_config_version}"
> profiles {
> // [...]
>   munin        { includeConfig "${params.custom_config_base}/conf/munin.config" }
> // [...]
> }
> ```

## Create the pipeline system specific config file

> Create [`conf/pipeline/sarek/munin.config @ nf-core/configs`](https://github.com/nf-core/configs/blob/master/conf/pipeline/sarek/munin.config)

Finally we create the actual pipeline config file, just as we do for a regular `Nextflow` configuration file.

Since the same profile is used to load this institutional pipeline-specific configuration file and the institutional configuration file, pipeline-specific `params` will overwrite the one already existing, _ie_ the ones that could already be specified within the institutional [`nf-core/configs/conf/munin.config`](https://github.com/nf-core/configs/blob/master/conf/munin.config) file.

In our case, it's just two params that we are overwriting: `config_profile_contact` and `config_profile_description` that way, when `nf-core/sarek` is launched on `munin`, the user will notice there's an extra level of configuration.

Then, just need to add the additional params that are `sarek` specific, and loading the `Sentieon` module.

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
    if (params.sentieon) {
      module = 'sentieon/201808.05'
      container = ''
    }
  }
}
```

## Tests

Both following commands worked as expected on munin.
Since [PR#66](https://github.com/nf-core/sarek/pull/66) is not merged yet, I used `MaxUlysse/sarek -r sention` to specify my own branch of sarek.
Since [PR#85](https://github.com/nf-core/configs/pull/85) is not merged yet, I used `--custom_config_base` to specify my own fork of nf-core/configs.

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
