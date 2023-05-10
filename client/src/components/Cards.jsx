import Card from "./Card";
import style from "../style-modules/Cards.module.css";
const Cards = (props) => {
  const { games } = props;

  return (
    <div className={style.container}>
      {games?.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            key={game.id}
            background_image={game.background_image}
            genres={game.genres}
            metacritic={game.metacritic}
          />
        );
      })}
    </div>
  );
};

export default Cards;
