"use client";

import styles from "./Card.module.scss";
import { CardType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { WindowMockUp } from "./WindowMockup";

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
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: false,
    fallbackInView: true,
  });

  const {
    title,
    img: { src, width, height },
    url,
  } = card;

  return (
    <Link
      ref={ref}
      className={
        inView
          ? [styles.card, i % 2 ? styles.slideRight : styles.slideLeft].join(" ")
          : [styles.card, styles.hidden].join(" ")
      }
      href={`projects/${title.toLowerCase()}`}
    >
      {i % 2 === 0 && <Article card={card} />}
      {url ? (
        <WindowMockUp url={url} />
      ) : (
        <Image src={src} alt={title} width={width} height={height} />
      )}
      {i % 2 === 1 && <Article card={card} />}
    </Link>
  );
};
