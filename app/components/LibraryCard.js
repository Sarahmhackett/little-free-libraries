import Link from "next/link";
import Image from "next/image";
import styles from "./LibraryCard.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const LibraryCard = ({ id, name, street, town, city, postcode, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <Link href={`/library-details/${id}`}>
          <h2 className={`${googleFont.className} ${styles.title}`}>{name}</h2>
        </Link>
        <p>
          {street}, {town}, {city}, {postcode}
        </p>
        <Link href={`/library-details/${id}`} className={styles.button}>
          See More
        </Link>
      </div>
      <div className={styles.cardRight}>
        <Image src={image} alt="Placeholder image" width={200} height={200} />
      </div>
    </div>
  );
};

export default LibraryCard;
