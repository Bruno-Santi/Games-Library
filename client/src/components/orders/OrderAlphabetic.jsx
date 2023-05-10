import style from "../../views/Home/Home.module.css";

const OrderAlphabetic = () => {
  return (
    <div>
      <label className={style.text2} for="orderBy">
        ALPHABETIC ORDER
      </label>
      <select className={style.input} name="orderBy">
        <option className={style.inputText} key={"300"} value="empty">
          -
        </option>
        <option className={style.inputText} key={"301"} value="ascending">
          Ascending
        </option>
        <option className={style.inputText} key={"302"} value="descending">
          Descending
        </option>
      </select>
    </div>
  );
};

export default OrderAlphabetic;
