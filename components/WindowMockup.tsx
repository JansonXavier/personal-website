import styles from "./WindowMockup.module.scss";
import { FC } from "react";

type Props = { url: string };
export const WindowMockUp: FC<Props> = ({ url }) => {
  return (
    <div className={styles.windowMockup}>
      <div className={styles.topPart}>
        <svg height={48} width={800}>
          <circle cx="25" cy="24" r="6" stroke="red" stroke-width="2" fill="#111827" />
          <circle cx="50" cy="24" r="6" stroke="yellow" stroke-width="2" fill="#111827" />
          <circle cx="75" cy="24" r="6" stroke="green" stroke-width="2" fill="#111827" />
        </svg>
      </div>
      <iframe src={url} width={800} height={450} />
    </div>
  );
};
