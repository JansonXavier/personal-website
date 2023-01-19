import { StaticImageData } from "next/image";

export type CardType = {
  title: string;
  description: string;
  technologies: string[];
  img: {
    src: StaticImageData;
    width: number;
    height: number;
  };
  url?: string;
};
