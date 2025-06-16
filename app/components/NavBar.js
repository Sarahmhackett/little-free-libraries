import Link from "next/link";
import styles from "./NavBar.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={`${googleFont.className} ${styles.title}`}>
          Little Leeds Libraries
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/libraries/add">Add New Library</Link>
        </li>
        <li>
          <Link href="/libraries/see-all">See All</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
