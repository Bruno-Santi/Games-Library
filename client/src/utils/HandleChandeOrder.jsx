import { useDispatch } from "react-redux";
import { orderGamesAlphabetic, orderGamesRating } from "../redux/actions";

const HandleChangeOrder = ({ event, order, setOrder }) => {
  const dispatch = useDispatch();
  const { name, value } = event.target;
  setOrder({ ...order, [name]: value });

  if (name === "orderBy") dispatch(orderGamesAlphabetic(value));
  if (name === "orderByRating") dispatch(orderGamesRating(value));
};

export default HandleChangeOrder;
