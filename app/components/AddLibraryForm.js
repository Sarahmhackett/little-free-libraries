"use client";

import { useState } from "react";
import { getLatLngFromAddress } from "../lib/getLatLong";
import { addLibrary } from "../actions/addLibrary";
import styles from "./AddLibraryForm.module.css";

const AddNewLibraryForm = () => {
  // Store Form fields in state
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    town: "",
    city: "",
    postcode: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Once submitted, use formData state to fetch lat long coords and create formDataToSend.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { lat, lng } = await getLatLngFromAddress(formData);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("street", formData.street);
      formDataToSend.append("town", formData.town);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("postcode", formData.postcode);
      formDataToSend.append("lat", lat);
      formDataToSend.append("lng", lng);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      // call the AddLibrary action with that data
      await addLibrary(formDataToSend);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.formLabel}>
        Library Name / Description:
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Street
        <input
          name="street"
          type="text"
          value={formData.street}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Town
        <input
          name="town"
          type="text"
          value={formData.town}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        City:
        <input
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Postcode:
        <input
          name="postcode"
          type="text"
          value={formData.postcode}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Upload Image:
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className={styles.fileInput}
        />
      </label>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default AddNewLibraryForm;
