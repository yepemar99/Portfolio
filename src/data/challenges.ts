import { IChallenge } from "../types/interfaces";
import { mySkills } from "./skills";

//Kiero MarketPlace
import kieroLogo from "../assets/challenges/kiero/kieroLogo.png";
import kieroProject from "../assets/challenges/kiero/kieroProject.png";

//AM-Store
import amLogo from "../assets/challenges/amStore/amLogo.png";
import amProject from "../assets/challenges/amStore/amProject.png";

//Rockets
import rockects from "../assets/challenges/rockets/rockets.png";
export const challenges: IChallenge[] = [
  {
    imageSrc: kieroProject.src,
    id: 0,
    logoSrc: kieroLogo.src,
    url: "https://kiero.co/",
    sourceCodeUrl: "",
    title: "Kiero Marketplace",
    subTitle: "Online Store",
    description:
      " Through this activity he learned to better understand the Mexican market and to identify the needs of its inhabitants, businesses and companies. It is there where he decided to take the initiative to register as his main economic activity the commercialization of retail products through the Internet, offering third party stores a Marketplace as a space to commercialize their products. ",
    year: 2021,
    skills: [
      mySkills[0],
      mySkills[1],
      mySkills[3],
      mySkills[5],
      mySkills[8],
      mySkills[9],
      mySkills[10],
      mySkills[11],
      mySkills[12],
      mySkills[13],
      mySkills[14],
      mySkills[15],
    ],
  },
  {
    imageSrc: amProject.src,
    logoSrc: amLogo.src,
    id: 1,
    url: "https://amstore.agency/",
    sourceCodeUrl: "",
    title: "AM-Store",
    subTitle: "Online Store",
    description:
      "This website consists of a virtual store created to be used mainly in Cuba, which aims to provide the service of publishing their products to anyone who wants to sell something.  ",
    year: 2022,
    skills: [
      mySkills[2],
      mySkills[0],
      mySkills[3],
      mySkills[5],
      mySkills[7],
      mySkills[8],
      mySkills[9],
      mySkills[10],
      mySkills[11],
      mySkills[12],
      mySkills[13],
      mySkills[14],
      mySkills[15],
      mySkills[16],
    ],
  },
  {
    imageSrc: rockects.src,
    logoSrc: "",
    id: 2,
    url: "",
    sourceCodeUrl:
      "https://github.com/yepemar99/upcoming-rocket-launches-challenge",
    title: "Upcoming-Rocket-Launches",
    subTitle: "upcoming-rocket-launches-challenge-app",
    description:
      "This app is a challenge and consists of displaying information from the Upcoming-Rocket-Launches api about upcoming rocket launches that are planned. ",
    year: 2022,
    skills: [
      mySkills[1],
      mySkills[0],
      mySkills[2],
      mySkills[3],
      mySkills[5],
      mySkills[10],
      mySkills[11],
      mySkills[12],
      mySkills[13],
      mySkills[14],
    ],
  },
];
