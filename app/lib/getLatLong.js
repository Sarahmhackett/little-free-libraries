"use client";

import { setDefaults, fromAddress } from "react-geocode";

setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_SECRET,
  language: "en",
  region: "GB",
});

export async function getLatLngFromAddress({ street, town, city, postcode }) {
  // get address from form submission
  const address = `${street}, ${town}, ${city}, ${postcode}`;

  // call fromAddress in Google api using address data and get lat long
  try {
    const response = await fromAddress(address);
    const { lat, lng } = response.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("Geocode error:", error);
    throw error;
  }
}
