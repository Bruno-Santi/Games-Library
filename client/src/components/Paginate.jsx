import { useState } from "react";
import style from "../views/Home/Home.module.css";
const Paginate = ({ page, setPage, maximum }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const prevPage = () => {
    setInput(input - 1);
    setPage(page - 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(
          e.target.value < 1 || parseInt(e.target.value) > Math.ceil(maximum)
        ) ||
        isNaN(e.target.value)
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.paginateContainer}>
      <button
        className={style.myButton}
        disabled={page === 1}
        onClick={prevPage}
      >
        PREV
      </button>

      <p
        style={{ width: "20px", color: "white" }}
        name="page"
        autoComplete="off"
      >
        {input}
      </p>
      <p style={{ color: "white" }}>de {maximum}</p>
      <button disabled={page === maximum} onClick={nextPage}>
        <div className={style.paginateButton}>NEXT</div>
      </button>
    </div>
  );
};

export default Paginate;
