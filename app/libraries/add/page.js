import AddNewLibraryForm from "@/app/components/AddLibraryForm";
import Link from "next/link";
import styles from "./page.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const AddLibrary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.titleContainer}>
          <h2 className={`${googleFont.className} ${styles.title}`}>
            📍 Add a new Little Free Library 📍
          </h2>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.bodyContainer}>
            <p className={styles.body}>
              Maybe you picked up a genre you'd never normally choose,
              discovered a brand-new release left by a kind stranger, or found
              the perfect holiday read tucked away for a quiet afternoon.
              <br />
              <br />
              If there's a Little Library near you, help others discover it by{" "}
              <strong>filling out the form</strong> to add it to the{" "}
              <Link href="/see-all" className={styles.bodyLink}>
                Leeds map
              </Link>
              📍
              <br />
              <br />
              And if you've found something special at a library near you, let
              people know in the{" "}
              <Link href="/see-all" className={styles.bodyLink}>
                comments section
              </Link>{" "}
              you appreciate their donation! ✨
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <AddNewLibraryForm />
      </div>
    </div>
  );
};

export default AddLibrary;
