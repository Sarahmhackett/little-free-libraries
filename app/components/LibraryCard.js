import styles from "./LibraryCard.module.css";

const LibraryCard = ({ name, street, town, city, postcode, image }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>
        {street}, {town}, {city}, {postcode}
      </p>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default LibraryCard;
