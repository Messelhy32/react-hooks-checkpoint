/* eslint-disable react/prop-types */
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import { useState } from "react";
function HomePage({ filter, handleFilter }) {
  const [form, setForm] = useState(false);
  const handleForm = () => {
    setForm(!form);
  };
  return (
    <div>
      <button
        onClick={handleForm}
        className="block text-center m-auto my-4 rounded-sm py-2 px-3 bg-slate-100 text-slate-800 font-semibold"
      >
        {!form ? "Add Movie" : "x"}
      </button>
      {form && <AddMovie />}
      <button
        onClick={handleFilter}
        className="rounded-sm py-2 px-3 mb-4 bg-emerald-200 text-emerald-950 font-semibold"
      >
        Filtered List
      </button>
      {filter ? <Filter /> : <MovieList />}
    </div>
  );
}

export default HomePage;
