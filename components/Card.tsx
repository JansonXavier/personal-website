"use client";

import styles from "./Card.module.scss";
import { CardType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

type ArticleProps = { card: CardType };
const Article: FC<ArticleProps> = ({ card: { title, description, technologies } }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>
        {technologies.map((tech) => (
          <p key={tech}>{tech}</p>
        ))}
      </span>
    </article>
  );
};

type Props = { card: CardType; i: number };
export default ({ card, i }: Props) => {
  const { ref, inView } = useInView({});
  const { title, imgUrl } = card;

  return (
    <Link
      ref={ref}
      className={
        inView ? [styles.card, i % 2 ? styles.slideLeft : styles.slideRight].join(" ") : styles.card
      }
      href={`projects/${title.toLowerCase()}`}
    >
      {i % 2 ? (
        <>
          <Image src={imgUrl} alt={title} width={800} height={1446} />
          <Article card={card} />
        </>
      ) : (
        <>
          <Article card={card} />
          <Image src={imgUrl} alt={title} width={800} height={1446} />
        </>
      )}
    </Link>
  );
};
