import styles from "./Projects.module.scss";
import Card from "../../../components/Card";
import { cards } from "../../../utils/data";

export default () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      {cards.map((card, i) => {
        return <Card key={card.title} card={card} i={i} />;
      })}
    </section>
  );
};
