const OrderRating = () => {
  return (
    <>
      <label for="orderByRating">Order by rating</label>
      <select name="orderByRating">
        <option value="-">-</option>
        <option value="mintomax">Min to Max</option>
        <option value="maxtomin">Max to Min</option>
      </select>
    </>
  );
};

export default OrderRating;
