"use client";

import { setDefaults, fromAddress } from "react-geocode";

// Set the geocoding defaults once
setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_SECRET,
  language: "en",
  region: "GB",
});

export async function getLatLngFromAddress({ street, town, city, postcode }) {
  const address = `${street}, ${town}, ${city}, ${postcode}`;

  try {
    const response = await fromAddress(address);
    const { lat, lng } = response.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("Geocode error:", error);
    throw error;
  }
}
