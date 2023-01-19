import styles from "./Navbar.module.scss";

export default () => {
  return (
    <nav className={styles.nav}>
      <a href="/#top">About</a>
      <a href="/#projects">Projects</a>
      <a href="/#skills">Skills</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
};
