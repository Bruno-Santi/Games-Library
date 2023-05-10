import style from "../../views/Home/Home.module.css";
const OrderRating = () => {
  return (
    <div>
      <label className={style.text2} for="orderByRating">
        RATING ORDER
      </label>
      <select className={style.input} name="orderByRating">
        <option className={style.inputText} value="-">
          -
        </option>
        <option className={style.inputText} value="mintomax">
          Min to Max
        </option>
        <option className={style.inputText} value="maxtomin">
          Max to Min
        </option>
      </select>
    </div>
  );
};

export default OrderRating;
