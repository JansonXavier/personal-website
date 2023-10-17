export type CardType = {
  title: string;
  description: string;
  technologies: string[];
  img: {
    src: string;
    width: number;
    height: number;
  };
  url?: string;
};
