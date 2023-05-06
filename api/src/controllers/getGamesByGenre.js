const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const getGamesByGenre = async (Genre) => {
  const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const gamesFilteredByGenre = response.data.results.filter((game) =>
    game.genres.some((genre) => genre.name.toLowerCase() == Genre)
  );
  const games = gamesFilteredByGenre.map((game) => {
    const genres = [];
    game.genres.forEach((genre) => {
      genres.push(genre.name);
    });

    return {
      id: game.id,
      name: game.name,
      platforms: game.platforms,
      background_image: game.background_image,
      released: game.released,
      genres: genres,
    };
  });
  return games;
};

module.exports = getGamesByGenre;
