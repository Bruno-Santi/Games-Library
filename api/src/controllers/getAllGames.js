require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const axios = require("axios");

const getAllGames = async () => {
  const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiGames = response.data.results;
  const dbGames = Videogame.findAll();
  return [apiGames, dbGames];
};

module.exports = getAllGames;
