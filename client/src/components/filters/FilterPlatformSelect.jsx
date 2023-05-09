import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlatforms } from "../../redux/actions";

const FilterPlatformSelect = () => {
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.platforms);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div>
      <label for="platforms">Choose a platform: </label>
      <select name="platforms">
        <option key={"1"} value="empty">
          -
        </option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPlatformSelect;
