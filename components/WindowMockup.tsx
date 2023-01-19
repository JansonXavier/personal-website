import styles from "./WindowMockup.module.scss";
import { FC } from "react";

type Props = { url: string };
export const WindowMockUp: FC<Props> = ({ url }) => {
  return (
    // <div className="max-w-2xl transition-colors ease-linear shadow-md">
    //   <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
    //     <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
    //     <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
    //     <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
    //   </div>
    //   <iframe className="border-t-0 w-full h-96 rounded-b-lg" src={url} width={800} height={650} />
    // </div>

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
