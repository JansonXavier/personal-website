import styles from "./layout.module.scss";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type RootLayoutProps = { children: ReactNode };
export default ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={styles.html}>
      <head />
      <body id="top" className={styles.body}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
