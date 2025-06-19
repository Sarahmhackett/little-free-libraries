"use server";
import cloudinary from "../config/cloudinary";
import connectDB from "../config/database";
import Library from "../models/libraries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addLibrary(formData) {
  await connectDB();

  const street = formData.get("street");

  const existingLibrary = await Library.findOne({ street });

  if (existingLibrary) {
    return {
      success: false,
      error:
        "Uh oh! A library already exists at this address, check the 'see all' map",
    };
  }

  // Cloudinary image upload
  let imageUrl = "";

  const imageFile = formData.get("image");
  if (imageFile && imageFile.name !== "") {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const base64 = buffer.toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64}`,
      {
        folder: "libraries",
      }
    );

    imageUrl = result.secure_url;
  }

  // Creates a new MongoDB Library record from the formData passed to it
  const newLibrary = new Library({
    name: formData.get("name"),
    street: formData.get("street"),
    town: formData.get("town"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    lat: parseFloat(formData.get("lat")),
    lng: parseFloat(formData.get("lng")),
    image: imageUrl,
  });

  await newLibrary.save();
  revalidatePath("/");
  redirect("/libraries/see-all");
}
