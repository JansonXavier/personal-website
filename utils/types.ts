import { StaticImageData } from "next/image";

export type CardType = {
  title: string;
  description: string;
  technologies: string[];
  imgUrl: StaticImageData;
};
