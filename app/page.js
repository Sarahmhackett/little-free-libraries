import styles from "./page.module.css";
import AddLibraryForm from "./components/AddLibraryForm";
import connectDB from "./config/database";
import Library from "./models/libraries";

export default async function Home() {
  await connectDB();
  console.log("Page loaded and DB connected");

  try {
    const allLibraries = await Library.find({});
    console.log("All libraries:", allLibraries);
  } catch (error) {
    console.error("Error fetching libraries:", error);
  }

  return <div className={styles.page}>Homepage </div>;
}

return (
  <div className={styles.page}>
    <AddLibraryForm />
  </div>
);
