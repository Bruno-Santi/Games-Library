import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actions";
import style from "../../views/Home/Home.module.css";
const FilterGenreSelect = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <label className={style.text2} for="genres">
        GENRE
      </label>
      <select className={style.input} name="genres">
        <option className={style.inputText} value="empty">
          -
        </option>
        {genres?.map((genre) => (
          <option className={style.inputText} key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGenreSelect;
