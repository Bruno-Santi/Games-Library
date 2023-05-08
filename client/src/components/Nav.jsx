import { Link, useLocation } from "react-router-dom";
import style from "../style-modules/Nav.module.css";
const Nav = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <nav className={style.nav}>
      <Link className={style.link} to="/home">
        <span className={style.span}>HOME</span>
      </Link>
      <Link className={style.link} to="/form">
        <span className={style.span}>FORM</span>
      </Link>
      <Link className={style.link} to="/about">
        <span className={style.span}>ABOUT</span>
      </Link>
      <Link className={style.link} to="/">
        <span className={style.span}>EXIT</span>
      </Link>
    </nav>
  );
};

export default Nav;
