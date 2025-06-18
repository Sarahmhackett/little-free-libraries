import Link from "next/link";
import Image from "next/image";
import styles from "./LibraryCard.module.css";

const LibraryCard = ({ id, name, street, town, city, postcode, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <Link href={`/library-details/${id}`}>
          <h2>{name}</h2>
        </Link>
        <p>
          {street}, {town}, {city}, {postcode}
        </p>
      </div>
      {/* {image && <img src="/images/placeholder.png" alt={name} />} */}
      <div className={styles.cardRight}>
        <Image
          src="/images/placeholder.png"
          alt="Placeholder image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default LibraryCard;
