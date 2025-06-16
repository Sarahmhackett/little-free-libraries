import styles from "./LibraryCard.module.css";
import Link from "next/link";

const LibraryCard = ({ id, name, street, town, city, postcode, image }) => {
  return (
    <div className={styles.card}>
      <Link href={`/library-details/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>
        {street}, {town}, {city}, {postcode}
      </p>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default LibraryCard;
