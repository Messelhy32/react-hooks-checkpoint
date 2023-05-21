import PropTypes from "prop-types";
import { useNavigate } from "react-router";
function MovieCard(props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {props.children}
        <h1 className="mt-2 text-2xl font-bold">{props.title}</h1>
        <p className="mt-2 text-md">{props.description}</p>
        <p className="mt-2 text-sm font-bold rounded-md bg-slate-400 text-white p-1 w-40 m-auto">
          {props.rating}/10
        </p>
        <button onClick={() => navigate(`/${props.id}`)}>More Info</button>
      </div>
    </>
  );
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.any.isRequired,
  id: PropTypes.any,
  children: PropTypes.any.isRequired,
};
export default MovieCard;
