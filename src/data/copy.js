import spotifyClone from "../assets/Linkedin-spotify klon@2x.jpg";
import orderSumCard from "../assets/Linkedin-best-app - v2@2x.jpg";
import passGen from "../assets/Linkedin-pw-gen-v2.jpg";
import klarna from "../assets/Linkedin-klarna@2x.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HeroAnton from "../assets/HeroAnton.png";
import Flaggapp from "../assets/flaggapp.png";
import Finansappen from "../assets/Finansappen.png"

export const COPY = {
  hero: {
    title: "Smarta lösningar som driver resultat.",
    subtitle:
      "Jag utvecklar användarvänliga system som effektiviserar logistik och förbättrar kundupplevelsen utan krångliga arbetsflöden.",
    cta1: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/antonio-moussa-7a27421b0/",
          "_blank"
        );
      },
    },
    cta2: {
      text: "SE PROJEKT",
      to: "/#projects",
    },
    statistic1: "1 000+ timmar kodat",
    statistic2: "Certifierad webbutvecklare",
  },
  aboutMe: {
    title: "Antonio Moussa",
    subtitle:
      "Jag hjälper företag att öka sin försäljning med smarta webblösningar utan att behöva investera i dyra system.",
    cta: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/antonio-moussa-7a27421b0/",
          "_blank"
        );
      },
    },
    statistics: [
      { statistic: "1 000 +", text: "Timmar kodat" },
      { statistic: "20 +", text: "Projekt byggda" },
    ],
    profilePicture: HeroAnton,
  },
  projects: [
    {
      img: Finansappen,
      title: "Finansappen",
      listOfTechStack: ["React", "Javascript", "API", "CSS"],
      description: `Nu bygger jag en smart och enkel app för att hålla koll på din ekonomi. Hantera inkomster, utgifter och få en översikt över din budget med användarvänliga verktyg. Perfekt för dig som vill få bättre kontroll över din privatekonomi.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/Finansappen.git" },
        { Icon: OpenInNewIcon, href: "https://github.com/AntonioMoussa/Finansappen.git" },
      ],
      rightAlign: true,
    },
    {
      img: spotifyClone,
      title: "Spotify Klon",
      listOfTechStack: ["React", "Node", "API"],
      description: `En webbapp för att visualisera din personliga Spotify-data. Se dina toppartister, topplåtar, nyligen spelade låtar och detaljerad ljudinformation om varje låt. Skapa och spara nya spellistor med rekommenderade låtar baserat på dina befintliga spellistor – och mycket mer.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/Spotify-klon-hela-Appen.git" },
        { Icon: OpenInNewIcon, href: "/Spotify.mp4", isVideo: true },
      ],
      rightAlign: false,
    },
    {
      img: Flaggapp,
      title: "Alla världens länder",
      listOfTechStack: ["React", "Javascript", "NPM", "API", "CSS"],
      description: `En responsiv app där du enkelt kan filtrera länder efter kontinent och se detaljerad information som huvudstad, befolkningsantal och flagga. Appen har även stöd för både ljust och mörkt läge för en anpassad användarupplevelse.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/world-flaggs---utan-mode_modlues" },
        { Icon: OpenInNewIcon, href: "https://worldflagapp.netlify.app" },
      ],
      rightAlign: true,
    },
    {
      img: orderSumCard,
      title: "Beställningskortet",
      listOfTechStack: ["CSS", "HTML", "Responsivitet"],
      description: `Det här projektet är ett perfekt exempel på hur jag kan bidra i roller som Frontend Developer, UI/UX Developer, eller Web Developer i organisationer som värdesätter detaljerad och interaktiv design.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/Gift-Card" },
        { Icon: OpenInNewIcon, href: "https://giftcardapp.netlify.app" },
      ],
      rightAlign: false,
    },
    {
      img: passGen,
      title: "Password generator",
      listOfTechStack: ["Javascript", "CSS", "HTML", "Responsivitet"],
      description: `Denna lösenordsgeneratorapp är en bra illustration av hur jag kan bidra till roller som Frontend Developer, UI/UX Developer eller Software Developer där säkerhet och användarvänlighet är prioriterat.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/New-Password-Generator" },
        { Icon: OpenInNewIcon, href: "https://newpasswordgenerator1.netlify.app" },
      ],
      rightAlign: true,
    },
    {
      img: klarna,
      title: "Klarna Checkout",
      listOfTechStack: ["API", "Node", "API", "Express"],
      description: `Jag har byggt en webbtjänst som integrerar Klarna Checkout API, utvecklad med Node.js och Express. Projektet inkluderar autentiska API-anrop för att skapa en fungerande checkout-lösning och simulera en verklig köpprocess med produkter hämtade från FakeStore API.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/AntonioMoussa/Klarna-Checkout.git" },
        { Icon: OpenInNewIcon, href: "https://github.com/AntonioMoussa/Klarna-Checkout.git" },
      ],
      rightAlign: false,
    },
  ],
  reviews: [
    {
      author: "John Doe",
      reviewText: `Marcus's expertise in page speed optimization has greatly improved our website's performance. Our conversions have increased by 20% since working with him.`,
      img: HeroAnton,
      title: "Head of Cool Stuff",
    },
  ],
  contact: {
    title: "Nå ut till mig på Linkedin!",
    subtitle: 
      "Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna på LinkedIn – jag ser fram emot att höra från dig!",
    cta: {
      text: "TA KONTAKT",
      callback: () =>
        window.open(
          "https://www.linkedin.com/in/antonio-moussa-7a27421b0/",
          "_blank"
        ),
    },
  },
};
