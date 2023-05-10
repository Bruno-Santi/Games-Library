import style from "../../views/Home/Home.module.css";
const FilterApiDb = () => {
  return (
    <div>
      <label className={style.text2} for="gamesFrom">
        API / DB
      </label>
      <select className={style.input} name="gamesFrom">
        <option className={style.inputText} key={"200"} value="empty">
          -
        </option>
        <option className={style.inputText} key={"201"} value="api">
          API
        </option>
        <option className={style.inputText} key={"202"} value="db">
          Data Base
        </option>
      </select>
    </div>
  );
};

export default FilterApiDb;
