"use client";

import { useEffect, useState } from "react";
import styles from "./CommentSection.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

export default function CommentSection({ libraryId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!libraryId) return;

    async function fetchComments() {
      setLoading(true);
      const res = await fetch(`/api/comments/${libraryId}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      } else {
        console.error("Failed to load comments");
      }
      setLoading(false);
    }

    fetchComments();
  }, [libraryId]);

  if (loading) return <p>Loading comments...</p>;

  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <div className={styles.commentsContainer}>
      <h2 className={`${googleFont.className} ${styles.commentsTitle}`}>
        Comments
      </h2>
      {comments.map((comment) => (
        <div key={comment._id} className={styles.comment}>
          <p className={`${googleFont.className} ${styles.name}`}>
            {comment.name}
          </p>

          <p className={styles.message}> {comment.message} </p>
          <br />
          <p className={styles.date}>
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
