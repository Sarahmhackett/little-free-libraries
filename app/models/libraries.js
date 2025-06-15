import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  name: String,
  street: String,
  town: String,
  city: String,
  postcode: String,
  lat: Number,
  lng: Number,
  image: String,
});

const Library =
  mongoose.models.Library || mongoose.model("Library", librarySchema);

export default Library;
