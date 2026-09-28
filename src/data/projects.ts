export type Project = {
    id: string;
    name: string;
    description: string;
    url?: string;
    github?: string;
    years: string;
    role: string;
};

export const projects: Project[] = [
    {
        id: "nf-core-utils",
        name: "nf-core-utils",
        description:
            "A Nextflow plugin providing utility functions used by nf-core pipelines, including genome attribute resolution, reference file management, and pipeline initialization.",
        url: "https://nf-co.re/nf-core-utils",
        github: "https://github.com/nf-core/nf-core-utils",
        years: "2025–present",
        role: "Contributor",
    },
    {
        id: "seqinspector",
        name: "nf-core/seqinspector",
        description:
            "A dedicated QC-only pipeline for sequencing data, performing subsampling, quality assessment, duplication analysis, and contamination detection with flexible MultiQC reporting.",
        url: "https://nf-co.re/seqinspector",
        github: "https://github.com/nf-core/seqinspector",
        years: "2024–present",
        role: "Developer and maintainer",
    },
    {
        id: "nft-utils",
        name: "nft-utils",
        description:
            "An nf-test plugin providing additional functions and assertions for snapshot testing, including Nextflow version removal, YAML filtering, and channel utilities.",
        url: "https://nf-co.re/nft-utils",
        github: "https://github.com/nf-core/nft-utils",
        years: "2024–present",
        role: "Maintainer",
    },
    {
        id: "createpanelrefs",
        name: "nf-core/createpanelrefs",
        description:
            "A helper pipeline to create panel of normals and other models for tools like Mutect2, GENS, CNVKit, and GATK's germlinecnvcaller.",
        url: "https://nf-co.re/createpanelrefs",
        github: "https://github.com/nf-core/createpanelrefs",
        years: "2023–present",
        role: "Developer and maintainer",
    },
    {
        id: "references",
        name: "nf-core/references",
        description:
            "A pipeline to build reference files for common organisms, including indices for BWA, STAR, HISAT2, Salmon, and more, with cloud storage similar to AWS iGenomes.",
        url: "https://nf-co.re/references",
        github: "https://github.com/nf-core/references",
        years: "2023–present",
        role: "Developer and maintainer",
    },
    {
        id: "annotation-cache",
        name: "annotation-cache",
        description:
            "A resource providing pre-built SnpEff and VEP annotation caches on S3, with pipelines to download and manage caches for the nf-core community.",
        url: "https://annotation-cache.github.io/",
        github: "https://github.com/annotation-cache",
        years: "2023–present",
        role: "Developer and maintainer",
    },
    {
        id: "rnavar",
        name: "nf-core/rnavar",
        description:
            "A bioinformatics pipeline for RNA variant calling analysis following GATK4 best practices, including alignment, duplicate marking, BQSR, variant calling, filtering, and annotation.",
        url: "https://nf-co.re/rnavar",
        github: "https://github.com/nf-core/rnavar",
        years: "2021–present",
        role: "Developer and maintainer",
    },
{
        id: "nf-core",
        name: "nf-core",
        description:
            "A community effort to collect a curated set of analysis pipelines built using Nextflow. Provides standards, templates, tools, and CI testing for bioinformatics pipelines.",
        url: "https://nf-co.re/",
        github: "https://github.com/nf-core",
        years: "2017–present",
        role: "Core team member",
    },
    {
        id: "rnafusion",
        name: "nf-core/rnafusion",
        description:
            "An open-source Nextflow pipeline for detecting fusion genes from RNA-seq data. Runs multiple fusion detection tools and generates a consolidated final report.",
        url: "https://nf-co.re/rnafusion",
        github: "https://github.com/nf-core/rnafusion",
        years: "2017–present",
        role: "Maintainer",
    },
    {
        id: "sarek",
        name: "nf-core/sarek",
        description:
            "A portable workflow for whole-genome sequencing analysis of germline and somatic variants. Supports SNVs, indels, structural variants, CNVs, microsatellite instability, and annotation.",
        url: "https://nf-co.re/sarek",
        github: "https://github.com/nf-core/sarek",
        years: "2016–present",
        role: "Developer and maintainer",
    },
    {
        id: "iti",
        name: "Interactome-Transcriptome Integration",
        description:
            "A method to analyze gene expression data by superimposition of large-scale protein-protein interaction data over gene expression datasets for biomarker discovery in breast cancer.",
        url: "https://sourceforge.net/projects/iti/",
        years: "2009–2013",
        role: "Developer",
    },
];
