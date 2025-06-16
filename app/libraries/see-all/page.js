import connectDB from "@/app/config/database";
import Library from "@/app/models/libraries";
import LibraryCard from "@/app/components/LibraryCard";
import styles from "./page.module.css";

const SeeAllPage = async () => {
  await connectDB();

  const allLibraries = await Library.find({}).lean();

  return (
    <section>
      <div className={styles.container}>
        {allLibraries.map((lib) => (
          <LibraryCard
            key={lib._id}
            id={lib._id.toString()}
            name={lib.name}
            street={lib.street}
            town={lib.town}
            city={lib.city}
            postcode={lib.postcode}
            image={lib.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SeeAllPage;
