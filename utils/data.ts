import { CardType } from "./types";

export const cards: CardType[] = [
  {
    title: "Character",
    description:
      "This is the description for Character. I should expect it to be rather long as this is the main thing i'll be showing off",
    technologies: ["React Native", "Firebase"],
    img: {
      src: "/character.jpg",
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
      src: "boost.jpg",
      width: 1646,
      height: 1504,
    },
    url: "https://boost-splash-page.vercel.app",
  },
];
