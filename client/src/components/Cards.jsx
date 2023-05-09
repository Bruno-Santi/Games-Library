import Card from "./Card";
const Cards = (props) => {
  const { games } = props;

  return (
    <>
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
    </>
  );
};

export default Cards;
