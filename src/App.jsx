import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";
import MovieDesc from "./components/MovieDesc";
import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";
import FavMovie from "./components/FavMovie";

function App() {
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <>
      <Link className="mr-2" to="/">
        Home
      </Link>
      <Link to="/fav">Favorites</Link>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage filter={filter} handleFilter={handleFilter} />}
        />
        <Route exact path="/:id" element={<MovieDesc />} />
        <Route exact path="/fav" element={<FavMovie />} />
      </Routes>
    </>
  );
}
export default App;
