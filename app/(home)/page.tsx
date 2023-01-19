import styles from "./page.module.scss";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

export default () => {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};
