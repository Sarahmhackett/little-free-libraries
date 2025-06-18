"use client";

import { useState } from "react";
import { addComment } from "../actions/addComment";
import styles from "./AddCommentForm.module.css";
import { Borel } from "next/font/google";

const googleFont = Borel({
  subsets: ["latin"],
  weight: "400",
});

const CommentForm = ({ libraryId }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addComment({ libraryId, name, message });

    if (res.success) {
      setStatus("Comment added!");
      setName("");
      setMessage("");
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={`${googleFont.className} ${styles.label}`}>
        Your name
      </label>

      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <label className={`${googleFont.className} ${styles.label}`}>
        Your message
      </label>
      <textarea
        className={styles.input}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
      ></textarea>
      <button type="submit" className={styles.button}>
        Submit Comment
      </button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default CommentForm;
