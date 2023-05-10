import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlatforms } from "../../redux/actions";
import style from "../../views/Home/Home.module.css";
const FilterPlatformSelect = () => {
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.platforms);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div>
      <label className={style.text2} for="platforms">
        PLATFORM
      </label>
      <select className={style.input} name="platforms">
        <option className={style.inputText} key={"1"} value="empty">
          -
        </option>
        {platforms.map((platform) => (
          <option className={style.inputText} key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPlatformSelect;
