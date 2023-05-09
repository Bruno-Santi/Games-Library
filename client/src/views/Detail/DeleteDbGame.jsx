import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DeleteDbGame = ({ id }) => {
  const navigate = useNavigate();
  let regexUUID =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  let [gameDeleted, setGameDeleted] = useState("");
  const handleClick = async () => {
    let response = await axios.delete(`http://localhost:3001/videogames/${id}`);
    console.log(response);
    setGameDeleted(response.data);
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  };
  if (regexUUID.test(id)) {
    return (
      <>
        {gameDeleted ? (
          <h3>{gameDeleted}. Volviendo a home...</h3>
        ) : (
          <button onClick={handleClick}>Delete</button>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default DeleteDbGame;
