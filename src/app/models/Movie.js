import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  row_idx: Number,
  row: {
    Poster_Link: String,
    Series_Title: String,
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
  },
  isMatch: { type: Boolean, default: false },
  user_ids: [String],
});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);
export default Movie;
