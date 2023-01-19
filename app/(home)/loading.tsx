import styles from "./page.module.scss";
import About from "./About/About";

export default () => {
  return (
    <main className={styles.main}>
      <About />
    </main>
  );
};
