export type CvTableItem = {
    date: string;
    content: string;
};

export type CvGridItem = {
    label: string;
    value: string;
};

export type CvListItem = {
    content: string;
};

export type CvSectionData =
    | { kind: "table"; id: string; icon: string; title: string; items: CvTableItem[] }
    | { kind: "grid"; id: string; icon: string; title: string; items: CvGridItem[][]; columns?: number }
    | { kind: "list"; id: string; icon: string; title: string; items: CvListItem[] };

export const cvSections: CvSectionData[] = [
    {
        kind: "table",
        id: "experience",
        icon: "fa-solid fa-building",
        title: "Experience",
        items: [
            {
                date: "From 2025",
                content: `<ul class="list-group list-group-flush"><li class="list-group-item">Bioinformatician and System developer in <a href="https://ngisweden.scilifelab.se/" target="_blank" rel="noopener noreferrer">NGI</a> at <a href="https://www.scilifelab.se/" target="_blank" rel="noopener noreferrer">SciLifeLab</a></li><li class="list-group-item">• Pipeline development within <i class="fab fa-github"></i> <a href="https://github.com/nf-core">nf-core</a>, a community effort to collect a curated set of analysis pipelines built using Nextflow.</li><li class="list-group-item">• In the core team that administers the <i class="fa-solid fa-earth-europe"></i> <a href="https://nf-co.re/">nf-core</a> project</li></ul>`,
            },
            {
                date: "2022-2025",
                content: `<ul class="list-group list-group-flush"><li class="list-group-item">Bioinformatician in Scientific Development at <a href="https://seqera.io" target="_blank" rel="noopener noreferrer">Seqera Labs</a></li><li class="list-group-item">• Pipeline development within <i class="fab fa-github"></i> <a href="https://github.com/nf-core">nf-core</a>, a community effort to collect a curated set of analysis pipelines built using Nextflow.</li><li class="list-group-item">• In the core team that administers the <i class="fa-solid fa-earth-europe"></i> <a href="https://nf-co.re/">nf-core</a> project</li></ul>`,
            },
            {
                date: "2016-2022",
                content: `<ul class="list-group list-group-flush"><li class="list-group-item">Bioinformatician for <a href="https://ki.se/forskning/barntumorbanken" target="_blank" rel="noopener noreferrer">The Swedish Childhood Tumor Biobank (Barntumörbanken)</a></li><li class="list-group-item">• Development of <i class="fab fa-github"></i> <a href="https://github.com/nf-core/sarek">Sarek</a>, a Whole Genome/Targeted Sequencing Germline/Somatic analysis workflow in collaboration between two <a href="https://www.scilifelab.se/">SciLifeLab</a> infrastructures: <a href="https://ngisweden.scilifelab.se/" target="_blank" rel="noopener noreferrer">NGI</a> and <a href="https://www.nbis.se/" target="_blank" rel="noopener noreferrer">NBIS</a></li><li class="list-group-item">• Development of a <i class="fab fa-github"></i> <a href="https://github.com/nf-core/rnafusion">rnafusion</a> analysis workflow in collaboration with <a href="https://www.scilifelab.se/">SciLifeLab</a> infrastructure <a href="https://ngisweden.scilifelab.se/" target="_blank" rel="noopener noreferrer">NGI</a></li><li class="list-group-item">• In the core team that administers the <i class="fa-solid fa-earth-europe"></i> <a href="https://nf-co.re/">nf-core</a> project</li></ul>`,
            },
            {
                date: "2013-2014",
                content: `Research Associate at <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">National University of Singapore</a>, <a href="https://www.csi.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Cancer Science Institute of Singapore</a>`,
            },
            {
                date: "2009-2013",
                content: `<ul class="list-group list-group-flush"><li class="list-group-item">PhD Candidate at <a href="https://crcm-marseille.fr/" target="_blank" rel="noopener noreferrer">Cancer Research Center of Marseille</a></li><li class="list-group-item">• Development of <i class="fa-solid fa-earth-europe"></i> <a href="https://sourceforge.net/projects/iti/">ITI</a>, a method to analyze gene expression data by superimposition of a large scale protein-protein interaction data (human interactome) over several gene expression datasets</li></ul>`,
            },
        ],
    },
    {
        kind: "table",
        id: "education",
        icon: "fa-solid fa-university",
        title: "Education",
        items: [
            {
                date: "2009",
                content: `PhD in Bioinformatics and Genomics at <a href="https://www.univ-amu.fr/" target="_blank" rel="noopener noreferrer">Aix-Marseille Université</a>`,
            },
            {
                date: "2007-2009",
                content: `Master's Degree in Bioinformatics and Genomics (former master BBSG), <a href="https://bio-sciences.univ-amu.fr/" target="_blank" rel="noopener noreferrer">Faculté des Sciences de Luminy</a>, Marseille`,
            },
            {
                date: "2007",
                content: `Erasmus Semester in <a href="https://www.uea.ac.uk/biological-sciences" target="_blank" rel="noopener noreferrer">School of Biological Sciences</a>, <a href="https://www.uea.ac.uk/" target="_blank" rel="noopener noreferrer">University of East Anglia</a>, Norwich`,
            },
            {
                date: "2003-2007",
                content: `Bachelor's Degree in Biology and Biochemistry, <a href="https://sciences.univ-amu.fr/fr/departements/biologie" target="_blank" rel="noopener noreferrer">Faculté des Sciences de Luminy</a>, Marseille`,
            },
        ],
    },
    {
        kind: "grid",
        id: "skills",
        icon: "fa-solid fa-laptop",
        title: "Computer Skills",
        items: [
            [
                { label: "Scripting", value: "Groovy, Bash, Perl" },
                { label: "Pipeline", value: "Nextflow, Make" },
            ],
            [
                { label: "Web", value: "Astro, Jekyll, Wordpress" },
                { label: "Communication", value: "Slack, LaTeX, Beamer, Inkscape" },
            ],
            [
                { label: "Project Management", value: "Github, Trello" },
                { label: "Containers", value: "Docker, Singularity" },
            ],
            [
                { label: "Web languages", value: "HTML5, CSS3, SASS, JS" },
                { label: "Other", value: "Linux, clusters, Git, R" },
            ],
        ],
    },
    {
        kind: "grid",
        id: "languages",
        icon: "fa-solid fa-comment",
        title: "Languages",
        items: [
            [
                { label: "French", value: "Mother tongue" },
                { label: "English", value: "Fluent" },
                { label: "Swedish", value: "Basic" },
            ],
        ],
        columns: 3,
    },
    {
        kind: "list",
        id: "societies",
        icon: "fa-solid fa-flask",
        title: "Scientific Societies",
        items: [
            {
                content: `• Member of the International Society of Computational Biology (<a href="https://www.iscb.org/" target="_blank" rel="noopener noreferrer">ISCB</a>)`,
            },
            {
                content: `• Member of the French Society of Bioinformatics (Société Française de BioInformatique: <a href="https://www.sfbi.fr/" target="_blank" rel="noopener noreferrer">SFBI</a>)`,
            },
            {
                content: `• Member of BioInfoDiag (Le Réseau Français de Bioinformatique pour le Diagnostic: <a href="https://bioinfo-diag.fr/" target="_blank" rel="noopener noreferrer">BioInfoDiag</a>)`,
            },
            {
                content: `• Member of the French Community of PhDs (La Communauté Française des Docteurs: <a href="https://andes.asso.fr/communaute-francaise-des-docteurs/" target="_blank" rel="noopener noreferrer">CFD</a>)`,
            },
        ],
    },
    {
        kind: "table",
        id: "associations",
        icon: "fa-solid fa-users",
        title: "Associations",
        items: [
            {
                date: "From 2012",
                content: `Contributor to <a href="https://bioinfo-fr.net/" target="_blank" rel="noopener noreferrer">Bioinfo-fr.net</a> (French-speaking blog on Bioinformatics)`,
            },
            {
                date: "2012-2014",
                content: `Vice-president of <a href="https://jebif.fr/" target="_blank" rel="noopener noreferrer">JeBiF</a> - <a href="https://iscbsc.org/rsgs/">RSG-France</a> (Association of French Young Bioinformaticians)`,
            },
            {
                date: "2010-2011",
                content: `President of <a href="https://www.hippothese.asso.fr/" target="_blank" rel="noopener noreferrer">Hippo'Thèse</a> (Association of young researchers in Biology at Aix-Marseille University)`,
            },
            {
                date: "2010-2011",
                content: `Vice-president and webmaster of <a href="https://www.reseau-biotechno.com/" target="_blank" rel="noopener noreferrer">BIOTechno Network</a> (French Network of Associations organizing forums about careers in Biotechnology)`,
            },
            {
                date: "2009-2010",
                content: `Webmaster of <a href="http://www.hippothese.asso.fr/" target="_blank" rel="noopener noreferrer">Hippo'Thèse</a> (Association of young researchers in Biology at Aix-Marseille University)`,
            },
        ],
    },
    {
        kind: "table",
        id: "events",
        icon: "fa-solid fa-list",
        title: "Organization and Events",
        items: [
            {
                date: "2015",
                content: `Journées nationales de la Communauté Française des Docteurs (Webmaster, member of the organizing committee, and logistical support)`,
            },
            {
                date: "2012",
                content: `Doctoriales en Provence (Member of the organizing committee and logistical support)`,
            },
            {
                date: "2011",
                content: `Marché de la Chimie @ Fête de la Science (Conception and animation of a stand for Cancéropôle-PACA)`,
            },
            {
                date: "2011",
                content: `7th BIOTechno forum in Marseille (Head of the organizing committee)`,
            },
            {
                date: "2009-2012",
                content: `Annual meeting of doctoral school in Biology and Health Sciences from Aix-Marseille University (Member of the organizing committee, abstract selection, jury member, and logistical support)`,
            },
            {
                date: "2007-2011",
                content: `Logistical support in organizing the Plan de Cuques French Comics Festival`,
            },
        ],
    },
];
