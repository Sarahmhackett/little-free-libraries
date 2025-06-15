import styles from "./page.module.css";
import AddLibraryForm from "./components/AddLibraryForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <AddLibraryForm />
    </div>
  );
}
