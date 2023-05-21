/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function MovieDesc({ movies }) {
  const { id } = useParams();
  let name = "";
  let desc = "";
  let trailer = "";
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      name = movies[i].title;
      desc = movies[i].description;
      trailer = movies[i].trailer;
    }
  }
  return (
    <>
      <h1 className="mt-2 text-2xl font-bold">{name}</h1>
      <p className="m-auto mt-2 text-md max-w-md text-center">{desc}</p>
      <iframe
        className="text-center m-auto mt-2"
        width="1080"
        height="620"
        src={trailer}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Link
        to="/"
        className=" bg-slate-100 text-slate-800 block text-center m-auto my-4 rounded-sm py-2 px-3 font-semibold w-32"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i>
        Back
      </Link>
    </>
  );
}

export default MovieDesc;
