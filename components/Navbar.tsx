import styles from "./Navbar.module.scss";
import Link from "next/link";
import { FC } from "react";

type NavLinkProps = { title: string; href: string };
const NavLink: FC<NavLinkProps> = ({ title, href }) => {
  return <a href={href}>{title}</a>;
};

export default () => {
  return (
    <nav className={styles.nav}>
      <span>
        <NavLink title="About" href="/#top" />
        <NavLink title="Projects" href="/#projects" />
        <NavLink title="Skills" href="/#skills" />
        <NavLink title="Contact" href="/#contact" />
      </span>
      <span>
        <Link href="resume">Resume</Link>
      </span>
    </nav>
  );
};
