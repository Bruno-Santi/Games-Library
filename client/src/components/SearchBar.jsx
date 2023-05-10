import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByName, getGames } from "../redux/actions";
import style from "../views/Home/Home.module.css";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
    if (!value) {
      dispatch(getGames());
    }
  };
  const handleClick = () => {
    dispatch(getGamesByName(name));
    console.log(name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        maxlength="25"
        onChange={handleChange}
        className={style.searchBar}
      ></input>
      {name ? (
        <button className={style.myButton} onClick={handleClick}>
          Search
        </button>
      ) : (
        <button className={style.myButton} type="button" disabled>
          Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
