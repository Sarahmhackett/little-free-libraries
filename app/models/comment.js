import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    libraryId: { type: String, required: true },
    name: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "comments" }
);

const comments =
  mongoose.models.comments || mongoose.model("comments", commentSchema);

export default comments;
