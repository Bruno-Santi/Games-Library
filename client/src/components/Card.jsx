import { Link } from "react-router-dom";
const Card = (props) => {
  const {
    id,
    name,
    description,
    released,
    background_image,
    genres,
    platform,
    metacritic,
  } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h4>{name}</h4>
      </Link>
      <p>{description}</p>
      <p>{released}</p>
      <img
        src={background_image}
        width="200"
        height="200"
        alt="videogame alt"
      />
      <p>{genres?.join(" ")}</p>
      <p>{platform}</p>
      <p>Rating {metacritic}</p>
    </div>
  );
};

export default Card;
