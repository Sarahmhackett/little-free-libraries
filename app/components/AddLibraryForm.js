"use client";

import { useState } from "react";
import { getLatLngFromAddress } from "../lib/geocodeService";

const AddNewLibraryForm = () => {
  // set formData object as empty strings
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    town: "",
    city: "",
    postcode: "",
    image: null,
  });

  // set lat lng to empoty strings
  const [latLng, setLatLng] = useState({ lat: "", lng: "" });

  const [submitResult, setSubmitResult] = useState(null);

  // track what is typed
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // set the lat lng coords based on data passed to LongLatGeocode
      const { lat, lng } = await getLatLngFromAddress(formData);
      setLatLng({ lat, lng });

      //collate all the data to save
      const dataToSave = {
        ...formData,
        lat,
        lng,
      };

      setSubmitResult(dataToSave);

      // TODO: Save dataToSave to your DB/backend

      console.log("Data to save:", dataToSave);
    } catch (error) {
      console.log("Failed to get coordinates for address.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <label className="">
        Library Name / Description:
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className=""
        />
      </label>

      <label className="">
        Street
        <input
          name="street"
          type="text"
          value={formData.street}
          onChange={handleChange}
          required
          className=""
        />
      </label>

      <label className="">
        Town
        <input
          name="town"
          type="text"
          value={formData.town}
          onChange={handleChange}
          required
          className=""
        />
      </label>

      <label className="">
        City:
        <input
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          required
          className=""
        />
      </label>

      <label className="">
        Postcode:
        <input
          name="postcode"
          type="text"
          value={formData.postcode}
          onChange={handleChange}
          required
          className=""
        />
      </label>

      <label className="">
        Upload Image:
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className=""
        />
      </label>

      {/* Hidden inputs for lat/lng */}
      <input type="hidden" name="latitude" value={latLng.lat} />
      <input type="hidden" name="longitude" value={latLng.lng} />

      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
};

export default AddNewLibraryForm;
