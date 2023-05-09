import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Home.module.css";
import SearchBar from "../../components/SearchBar";
import Loading from "../../components/Loading";
import Cards from "../../components/Cards";
import FilterGenreSelect from "../../components/filters/FilterGenreSelect";
import FilterPlatformSelect from "../../components/filters/FilterPlatformSelect";
import FilterApiDb from "../../components/filters/FilterApiDb";
import OrderAlphabetic from "../../components/orders/OrderAlphabetic";
import OrderRating from "../../components/orders/OrderRating";
import Paginate from "../../components/Paginate";
import {
  getGames,
  orderGamesAlphabetic,
  orderGamesRating,
  filterGamesByGenre,
  filterGamesByPlatform,
  filterGamesApiDb,
} from "../../redux/actions";

const Home = () => {
  let games = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const maximum = Math.ceil(games?.length / page);
  let gamesSliced = games
    ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
    .map((game) => {
      return {
        key: game.id,
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        genres: game.genres,
        metacritic: game.metacritic,
      };
    });

  const handleClick = () => {
    dispatch(getGames());
    setFilters("");
  };

  useEffect(() => {
    dispatch(getGames())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    if (name === "genres") dispatch(filterGamesByGenre(value));
    if (name === "platforms") dispatch(filterGamesByPlatform(value));
    if (name === "gamesFrom") dispatch(filterGamesApiDb(value));
  };
  const handleChangeOrder = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });

    if (name === "orderBy") dispatch(orderGamesAlphabetic(value));
    if (name === "orderByRating") dispatch(orderGamesRating(value));
  };

  return (
    <div className={style.background} style={{ marginTop: "150px" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchBar />
          <h3>Filters</h3>
          <div onChange={handleChangeFilter}>
            <FilterGenreSelect />
            <FilterPlatformSelect />
            <FilterApiDb />
          </div>
          <button onClick={handleClick}>Reset Filters</button>
          <div onChange={handleChangeOrder}>
            <h3>Orders</h3>
            <OrderAlphabetic />
            <OrderRating />
          </div>
          <Cards games={gamesSliced} />
          <Paginate page={page} setPage={setPage} maximum={maximum} />
        </>
      )}
    </div>
  );
};

export default Home;
