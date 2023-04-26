const { Videogame, Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getVideoGameById = async (id) => {
  if (Number(id) === NaN) {
    const dbGame = await Videogame.findByPk(Number(id), {
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (dbGame) {
      return dbGame;
    }
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
  } else {
    throw Error(`No se ha encontrado el juego con el id: ${id}`);
  }
};

module.exports = getVideoGameById;
