import styles from "./About.module.scss";
import Image from "next/image";
import MeImg from "../../public/me.jpg";

export default () => {
  return (
    <section id="about" className={styles.about}>
      <article>
        <h1>Hi, I'm Janson</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </article>
      <Image src={MeImg} alt="Janson Xavier" width={300} height={300} />
    </section>
  );
};
