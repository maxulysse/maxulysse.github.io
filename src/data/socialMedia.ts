type SocialIcon =
    | { type: "svg"; src: string }
    | { type: "font"; library: "fab" | "ai"; name: string };

interface SocialMediaItem {
    name: string;
    url: string;
    icon: SocialIcon;
}

const socialMedia: SocialMediaItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/maxulysse/",
    icon: { type: "font", library: "fab", name: "fa-github" },
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/maxulysse.github.io",
    icon: { type: "font", library: "fab", name: "fa-bluesky" },
  },
  {
    name: "Mastodon",
    url: "https://scholar.social/@gau",
    icon: { type: "font", library: "fab", name: "fa-mastodon" },
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/gau/",
    icon: { type: "font", library: "fab", name: "fa-x-twitter" },
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0000-0003-2827-9261",
    icon: { type: "font", library: "ai", name: "ai-orcid" },
  },
  {
    name: "HAL",
    url: "https://cv.hal.science/maxime-garcia",
    icon: { type: "font", library: "ai", name: "ai-hal" },
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.fr/citations?user=bzhsE6oAAAAJ",
    icon: { type: "font", library: "ai", name: "ai-google-scholar" },
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/maximegarcia",
    icon: { type: "font", library: "fab", name: "fa-youtube" },
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maxugarcia/",
    icon: { type: "font", library: "fab", name: "fa-linkedin-in" },
  },
  {
    name: "Keybase",
    url: "https://keybase.io/maxulysse",
    icon: { type: "font", library: "fab", name: "fa-keybase" },
  },
  {
    name: "BioStars",
    url: "https://www.biostars.org/u/31759/",
    icon: { type: "svg", src: "/assets/img/icons/biostars.svg" },
  },
  {
    name: "Seqera",
    url: "https://community.seqera.io/u/maxulysse/",
    icon: { type: "svg", src: "/assets/img/icons/seqera.svg" },
  },
  {
    name: "Stack Exchange",
    url: "https://stackexchange.com/users/2204471/maxulysse/",
    icon: { type: "font", library: "fab", name: "fa-stack-overflow" },
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Maxime_Garcia",
    icon: { type: "font", library: "fab", name: "fa-researchgate" },
  },
  {
    name: "reddit",
    url: "https://www.reddit.com/user/maxulysse",
    icon: { type: "font", library: "fab", name: "fa-reddit-alien" },
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/maxulysse/",
    icon: { type: "font", library: "fab", name: "fa-instagram" },
  },
];

export default socialMedia;
