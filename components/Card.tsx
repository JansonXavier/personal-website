import styles from "./Card.module.scss";
import { CardType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type Props = { card: CardType };
export default ({ card: { title, imgUrl } }: Props) => {
  return (
    <article className={styles.card}>
      <Link href={`projects/${title.toLowerCase()}`}>
        <h2>{title}</h2>
        <Image src={imgUrl} alt={title} width={800} height={1446} />
      </Link>
    </article>
  );
};
