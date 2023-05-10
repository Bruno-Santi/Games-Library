import style from "../style-modules/Card.module.css";
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
    <div className={style.container}>
      <div className={style.contenedor}>
        <Link className={style.link} to={`/detail/${id}`}>
          <h4 className={style.title}>{name}</h4>
        </Link>
        <p>{description}</p>
        <p>{released}</p>
        <img
          className={style.image}
          src={background_image}
          width="450"
          height="300"
          alt="videogame alt"
        />
        <p className={style.genres}>{genres?.join(" ")}</p>
        <p>{platform}</p>
        <p className={style.rating}>Rating {metacritic}</p>
      </div>
    </div>
  );
};

export default Card;
