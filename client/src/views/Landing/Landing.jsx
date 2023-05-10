import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css";
const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.titulos}>
        <h2 className={style.texto}>WORK HARD</h2>
        <h2 className={style.texto2}>
          PLAY <u style={{ color: "red" }}>HARDER</u>
        </h2>
      </div>
      <Link className={style.link} to="home">
        <button className={style.slideTop}>HOME</button>
      </Link>
    </div>
  );
};

export default Landing;
