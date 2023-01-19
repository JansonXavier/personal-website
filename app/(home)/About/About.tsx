import styles from "./About.module.scss";
import Image from "next/image";
import MeImg from "../../../public/me.jpg";

export default () => {
  return (
    <section id="about" className={styles.about}>
      <article>
        <h1>Hi, I'm Janson</h1>
        <p>
          This is supposed to be filled with information about me I think but I'm not entirely sure
          what I should be writing. So for now I'll just fill this up with a bunch of dummy text to
          resemble what it might look like. That way, when I do add sensible content to this
          section, it should style itself quite nicely without any further intervention from me!
        </p>
      </article>
      <Image src={MeImg} alt="Janson Xavier" width={2316} height={3088} />
    </section>
  );
};
