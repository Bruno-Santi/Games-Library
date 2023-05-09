import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actions";

const FilterGenreSelect = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <label for="genres">Choose a genre: </label>
      <select name="genres">
        <option value="empty">-</option>
        {genres?.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGenreSelect;
