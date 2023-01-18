import styles from "./page.module.scss";
import About from "./About";
import Projects from "./Projects";

export default () => {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
      <section id="skills">Skills</section>
      <section id="contact">Contact</section>
    </main>
  );
};
