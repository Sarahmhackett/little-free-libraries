import connectDB from "@/app/config/database";
import Library from "@/app/models/libraries";
import LibraryCard from "@/app/components/LibraryCard";
import AllLibrariesOnMap from "@/app/components/AllLibrariesOnMap";
import styles from "./page.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const SeeAllPage = async () => {
  await connectDB();

  const allLibraries = await Library.find({}).sort({ _id: -1 }).lean();

  const serialisedAllLibraries = JSON.parse(JSON.stringify(allLibraries));

  return (
    <section>
      <div>
        <AllLibrariesOnMap serialisedAllLibraries={serialisedAllLibraries} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={`${googleFont.className} ${styles.title}`}>
          Browse Little Libraries
        </h2>
      </div>
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
