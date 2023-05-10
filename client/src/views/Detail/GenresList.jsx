import style from "../../views/Home/Home.module.css";
const GenresList = ({ genres }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <h3 className={style.h3} style={{ marginTop: "-20px" }}>
          Genres
        </h3>
        {genres?.map((genre) => (
          <>
            <li
              style={{
                display: "inline-block",
                listStyleType: "none",
                paddingRight: "10px",
              }}
              key={genre.id}
            >
              {"    "}
              {genre.name}
              {"    "}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
