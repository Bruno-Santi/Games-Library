const { Videogame, Genre } = require("../db");

const createVideoGame = async ({
  name,
  description,
  platforms,
  image,
  release_date,
  rating,
  genre,
}) => {
  if (!name || !description || !platforms || !image || !release_date) {
    throw Error("Faltan datos...");
  }
  const newGame = await Videogame.create({
    name,
    description,
    platforms,
    image,
    release_date,
    rating,
  });
  const genres = await Genre.findAll({ where: { name: genre } });
  newGame.addGenres(genres);
  return newGame;
};

module.exports = createVideoGame;
