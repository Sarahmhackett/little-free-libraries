"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiBookCover } from "react-icons/gi";
import styles from "./NavBar.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/">
          <li className={`${googleFont.className} ${styles.title}`}>
            Little Leeds Libraries
          </li>
          <li className={styles.mobileIcon}>
            <GiBookCover size={50} />
          </li>
        </Link>

        <li>
          <Link
            href="/libraries/add"
            className={`${styles.link} ${
              pathname === "/libraries/add" ? styles.active : ""
            }`}
          >
            Add New
          </Link>
        </li>
        <li>
          <Link
            href="/libraries/see-all"
            className={`${styles.link} ${
              pathname === "/libraries/see-all" ? styles.active : ""
            }`}
          >
            See All
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
