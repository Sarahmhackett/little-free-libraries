"use server";

import connectDB from "../config/database";
import Library from "../models/libraries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addLibrary(formData) {
  await connectDB();

  // Creates a new MongoDB Library record from the formData passed to it
  const newLibrary = new Library({
    name: formData.get("name"),
    street: formData.get("street"),
    town: formData.get("town"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    lat: parseFloat(formData.get("lat")),
    lng: parseFloat(formData.get("lng")),
    image: formData.get("image")?.name || "", // to do: Cloudinary
  });

  await newLibrary.save();
  revalidatePath("/");
  redirect("/");
}
