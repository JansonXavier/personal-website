import styles from "./Projects.module.scss";
import Card from "../../components/Card";
import CharacterImg from "../../public/Character.png";

export default () => {
  const cards = [
    {
      title: "Character",
      description: "This is the description",
      technologies: ["React Native", "Firebase"],
      imgUrl: CharacterImg,
    },
    {
      title: "Boost",
      description: "This is the description",
      technologies: ["React", "Excel"],
      imgUrl: CharacterImg,
    },
    {
      title: "Character",
      description: "This is the description",
      technologies: ["React Native", "Firebase"],
      imgUrl: CharacterImg,
    },
    {
      title: "Boost",
      description: "This is the description",
      technologies: ["React", "Excel"],
      imgUrl: CharacterImg,
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      {cards.map((card, i) => {
        return <Card key={card.title} card={card} i={i} />;
      })}
    </section>
  );
};
