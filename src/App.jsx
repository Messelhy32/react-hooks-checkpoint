import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  const [filter, setFilter] = useState(false);
  const [form, setForm] = useState(false);
  const [movies, setMovies] = useState([
    {
      title: "Forrest Gump",
      description:
        " The story of a man with a low IQ who manages to accomplish incredible things, from playing college football to meeting presidents and influencing the course of history.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
    },
    {
      title: "The Godfather",
      description:
        "The patriarch of the Corleone crime family transfers control of his empire to his reluctant son, who is drawn into the violent world of organized crime.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      rating: 9.2,
    },
    {
      title: "Inception",
      description:
        "A skilled thief enters people's dreams to steal their secrets, but is given an impossible task of planting an idea in someone's mind.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.7,
    },
    {
      title: "Titanic",
      description:
        "A poor artist falls in love with a wealthy woman on board the ill-fated Titanic, as the ship sails towards its tragic end.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      rating: 7.8,
    },
    {
      title: "The Shawshank Redemption",
      description:
        "A man is sentenced to life imprisonment for the murder of his wife and her lover, but he maintains his innocence and forms a bond with a fellow inmate in the Shawshank prison.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ1ODM2MjY3OV5BMl5BanBnXkFtZTgwMTU2MjEyMDE@._V1_.jpg",
      rating: 9.3,
    },
    {
      title: "The Dark Knight",
      description:
        "The Joker, a psychopathic criminal mastermind, wreaks havoc on Gotham City, while Batman struggles to maintain order and protect the citizens.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 9.0,
    },
  ]);
  const handleFilter = () => {
    setFilter(!filter);
  };
  const handleForm = () => {
    setForm(!form);
  };
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
      <button
        onClick={handleForm}
        className="block text-center m-auto my-4 rounded-sm py-2 px-3 bg-slate-100 text-slate-800 font-semibold"
      >
        {!form ? "Add Movie" : "x"}
      </button>
      {form && <AddMovie addMovie={addMovie} />}
      <button
        onClick={handleFilter}
        className={
          filter
            ? "rounded-sm py-2 px-3 mb-4 bg-red-200 text-red-950 font-semibold"
            : "rounded-sm py-2 px-3 mb-4 bg-emerald-200 text-emerald-950 font-semibold"
        }
      >
        {filter ? "Normal List" : "Filtered List"}
      </button>
      {filter ? <Filter movies={movies} /> : <MovieList movies={movies} />}
    </>
  );
}
export default App;
