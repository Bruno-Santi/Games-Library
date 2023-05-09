import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByName } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleClick = () => {
    dispatch(getGamesByName(name));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        maxlength="25"
        onChange={handleChange}
      ></input>
      {name ? (
        <button onClick={handleClick}>Search</button>
      ) : (
        <button type="button" disabled>
          Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
