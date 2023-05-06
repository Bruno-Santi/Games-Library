const { Videogame } = require("../db");

const createVideoGame = async ({
  name,
  description,
  platforms,
  background_image,
  released,
  metacritic,
  genre,
}) => {
  const newGame = await Videogame.create({
    name,
    description,
    platforms,
    background_image,
    released,
    metacritic,
  });

  newGame.addGenres(genre);
  return newGame;
};

module.exports = createVideoGame;
