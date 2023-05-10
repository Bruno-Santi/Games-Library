import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteGame } from "../../redux/actions";

import style from "../../views/Home/Home.module.css";
const DeleteDbGame = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDeleted);
  const [deletedGame, setDeletedGame] = useState(false);

  let regexUUID =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  const handleClick = () => {
    dispatch(deleteGame(id));
    setDeletedGame(true);
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  };
  if (regexUUID.test(id)) {
    return (
      <div className={style.gameDeleted}>
        {deletedGame ? (
          <h3 className={style.h3}>{game}. Backing home...</h3>
        ) : (
          <button className={style.myButton} onClick={handleClick}>
            Delete
          </button>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default DeleteDbGame;
