import mongoose from "mongoose";

const MatchedMovieSchema = new mongoose.Schema({
  Poster_Link: { type: String, required: true },
  Series_Title: { type: String, required: true },
  Released_Year: String,
  Certificate: String,
  Runtime: String,
  Genre: String,
  IMDB_Rating: Number,
  Overview: String,
  Meta_score: Number,
  Director: String,
  Star1: String,
  Star2: String,
  Star3: String,
  Star4: String,
  No_of_Votes: Number,
  Gross: String,
  userIDs: [String],
});
const MatchedMovie =
  mongoose.models.MatchedMovie ||
  mongoose.model("MatchedMovie", MatchedMovieSchema);

export default MatchedMovie;
