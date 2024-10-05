import mongoose from "mongoose";

const MatchedMovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  userID: [String],
});
const MatchedMovie =
  mongoose.models.MatchedMovie ||
  mongoose.model("MatchedMovie", MatchedMovieSchema);

export default MatchedMovie;
