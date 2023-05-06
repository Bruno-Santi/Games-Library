require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getAllGames = async (gameName) => {
  if (gameName) {
    const response = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${gameName}`
    );
    const gamesFilteredByName = response.data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        genres: game.genres?.map((genre) => genre.name),
        platforms: game.platforms?.map((a) => a.platform.name),
        background_image: game.background_image,
        released: game.released,
      };
    });
    const gamesFilteredDb = await Videogame.findAll({
      name: {
        [Op.iLike]: `%${gameName}%`,
      },
    });

    return [
      ...gamesFilteredDb.slice(0, 15),
      ...gamesFilteredByName.slice(0, 15),
    ];
  }
  let dbGames = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (dbGames) {
    dbGames = dbGames
      .map((game) => {
        return {
          id: game.id,
          name: game.name,
          genres: game.genres?.map((genre) => genre.name),
          platforms: game.platforms,
          background_image: game.background_image,
          released: game.released,
        };
      })
      .map((game) => {
        return {
          ...game,
          genres: game.genres?.flat(),
        };
      });
    let response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
    let apiGames = response.data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        genres: game.genres?.map((genre) => genre.name),
        platforms: game.platforms?.map((a) => a.platform.name),
        background_image: game.background_image,
        released: game.released,
        metacritic: game.metacritic,
      };
    });

    while (response.data.next && apiGames.length < 100) {
      response = await axios(response.data.next);
      const games = response.data.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          genres: game.genres?.map((genre) => genre.name),
          platforms: game.platforms?.map((a) => a.platform.name),
          background_image: game.background_image,
          released: game.released,
          metacritic: game.metacritic,
        };
      });
      apiGames = apiGames.concat(games);
    }

    if (dbGames) return [...apiGames, ...dbGames];
    return apiGames;
  }
};
module.exports = getAllGames;
