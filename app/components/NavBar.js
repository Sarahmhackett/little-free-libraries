import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
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
