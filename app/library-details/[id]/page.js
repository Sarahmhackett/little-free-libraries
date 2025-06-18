import connectDB from "@/app/config/database";
import Library from "@/app/models/libraries";
import LibraryItemMap from "@/app/components/LibraryItemOnMap";
import CommentSection from "@/app/components/CommentSection";
import CommentForm from "@/app/components/AddCommentForm";
import styles from "./page.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const LibraryDetailsPage = async ({ params }) => {
  await connectDB();
  const library = await Library.findById(params.id).lean();

  const serialisedLibrary = JSON.parse(JSON.stringify(library));

  if (!library) {
    return <div>Library not found</div>;
  }

  return (
    <div>
      <LibraryItemMap library={serialisedLibrary} />
      <div className={styles.titleContainer}>
        <h1 className={`${googleFont.className} ${styles.title}`}>
          {serialisedLibrary.name} Little Library
        </h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <div className={styles.subTitleContainer}>
            <p className={styles.subTitle}>
              Borrow a book from the Little {serialisedLibrary.name} Library?
              Let a stranger know if you loved what you read here:
            </p>
          </div>

          <CommentForm libraryId={serialisedLibrary._id} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.subTitleContainer}>
            <p className={styles.subTitle}>
              Did you leave a book recently? Read the recent comments and see if
              anyone has left a thank you
            </p>
          </div>
          <CommentSection libraryId={serialisedLibrary._id} />
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsPage;
