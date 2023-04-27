require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const axios = require("axios");

const getAllGames = async (gameName) => {
  if (gameName) {
    const response = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${gameName}`
    );
    const gamesFilteredByName = response.data.results.map(
      ({
        name,
        description,
        platforms,
        background_image,
        release,
        metacritic,
        genres,
      }) => {
        return {
          name,
          description,
          platforms,
          background_image,
          release,
          metacritic,
          genres,
        };
      }
    );
    const gamesFilteredDb = await Videogame.findAll({
      where: {
        name: gameName,
      },
    });

    return [...gamesFilteredDb, ...gamesFilteredByName.slice(0, 15)];
  }
  const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiGames = response.data.results;
  const dbGames = await Videogame.findAll();
  if (dbGames) {
    return [...apiGames, ...dbGames];
  }
  return apiGames;
};

module.exports = getAllGames;
