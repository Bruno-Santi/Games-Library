const { Videogame, Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getVideoGameById = async (id) => {
  let regexUUID =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (regexUUID.test(id)) {
    const dbGame = await Videogame.findByPk(id);
    if (dbGame) return dbGame;
  }
  const apiGame = await axios(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );

  if (apiGame) {
    const {
      name,
      description,
      platforms,
      background_image,
      release,
      metacritic,
      genres,
    } = apiGame.data;
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

  return `No se ha encontrado el juego con el id: ${id}`;
};

module.exports = getVideoGameById;
