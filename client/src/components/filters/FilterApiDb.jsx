const FilterApiDb = () => {
  return (
    <div>
      <label for="gamesFrom">Choose games from: </label>
      <select name="gamesFrom">
        <option key={"200"} value="empty">
          -
        </option>
        <option key={"201"} value="api">
          API
        </option>
        <option key={"202"} value="db">
          Data Base
        </option>
      </select>
    </div>
  );
};

export default FilterApiDb;
