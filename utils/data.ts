import CharacterImg from "../public/Character.png";
import BoostImg from "../public/Boost.png";
import { CardType } from "./types";

export const cards: CardType[] = [
  {
    title: "Character",
    description:
      "This is the description for Character. I should expect it to be rather long as this is the main thing i'll be showing off",
    technologies: ["React Native", "Firebase"],
    img: {
      src: CharacterImg,
      width: 718,
      height: 1446,
    },
  },
  {
    title: "Boost",
    description:
      "This is the for description Boost, as you can see it does not fit nicely... like at all",
    technologies: ["React", "Excel", "SQL"],
    img: {
      src: BoostImg,
      width: 1646,
      height: 1504,
    },
    url: "http://boost-excel.s3-website-us-east-1.amazonaws.com/",
  },
];
