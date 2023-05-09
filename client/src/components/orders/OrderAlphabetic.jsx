const OrderAlphabetic = () => {
  return (
    <div>
      <label for="orderBy">Choose an order: </label>
      <select name="orderBy">
        <option key={"300"} value="empty">
          -
        </option>
        <option key={"301"} value="ascending">
          Ascending
        </option>
        <option key={"302"} value="descending">
          Descending
        </option>
      </select>
    </div>
  );
};

export default OrderAlphabetic;
