import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGameDetail } from "../../redux/actions";
import Loading from "../../components/Loading";
import PlatformList from "./PlatformList";
import GenresList from "./GenresList";
import DescriptionFormatter from "./DescriptionFormatter";
import DeleteDbGame from "./DeleteDbGame";
import style from "../Home/Home.module.css";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getGameDetail(id));
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.detailContainer}>
          <h1>{game.name}</h1>
          <PlatformList platforms={game.platforms} />
          <GenresList genres={game.genres} />
          <h3>{game.released}</h3>
          <DescriptionFormatter description={game.description} />

          <img src={game?.background_image} alt="game" />
          <DeleteDbGame id={game.id} />
        </div>
      )}
    </>
  );
};

export default Detail;
