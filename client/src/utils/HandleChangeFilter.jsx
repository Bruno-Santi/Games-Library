import { useDispatch } from "react-redux";
import {
  filterGamesByGenre,
  filterGamesByPlatform,
  filterGamesApiDb,
} from "../redux/actions";

const HandleChangeFilter = ({ event, filters, setFilters }) => {
  const dispatch = useDispatch();
  const { name, value } = event.target;
  setFilters({ ...filters, [name]: value });

  if (name === "genres") dispatch(filterGamesByGenre(value));
  if (name === "platforms") dispatch(filterGamesByPlatform(value));
  if (name === "gamesFrom") dispatch(filterGamesApiDb(value));
};

export default HandleChangeFilter;
