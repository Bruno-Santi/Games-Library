import { useState } from "react";
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
    <div>
      <button
        style={{ backgroundColor: "black", padding: "40px" }}
        disabled={page === 1}
        onClick={prevPage}
      ></button>

      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p>de {maximum}</p>
      <button disabled={page === maximum} onClick={nextPage}>
        {" "}
        derecha{" "}
      </button>
    </div>
  );
};

export default Paginate;
