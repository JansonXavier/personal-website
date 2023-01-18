import styles from "./page.module.scss";
import Image from "next/image";
import Card from "../../components/Card";
import MeImg from "../../public/me.jpg";
import CharacterImg from "../../public/Character.png";

export default () => {
  const cards = [{ title: "Character", imgUrl: CharacterImg }];

  return (
    <main className={styles.main}>
      <section id="about" className={styles.about}>
        <article>
          <h1>Hi, I'm Janson</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </article>
        <Image src={MeImg} alt="Janson Xavier" width={300} height={300} />
      </section>

      <section id="projects" className={styles.projects}>
        <h1>Projects</h1>
        {cards.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </section>

      <section id="skills">Skills</section>
      <section id="contact">Contact</section>
    </main>
  );
};
