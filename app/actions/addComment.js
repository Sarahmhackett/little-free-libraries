"use server";

import connectDB from "../config/database";
import comments from "../models/comment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addComment({ libraryId, name, message }) {
  try {
    await connectDB();

    const newComment = new comments({
      libraryId,
      name,
      message,
    });

    await newComment.save();

    return { success: true };
  } catch (error) {
    console.error("Failed to add comment:", error);
    return { success: false, error: "Something went wrong." };
  }
}
