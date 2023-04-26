const { Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const getAllGenres = async () => {
  const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const genreNames = response.data.results.map(({ name }) => {
    return name;
  });
  await Genre.bulkCreate(genreNames.map((name) => ({ name })));

  return Genre.findAll();
};

module.exports = getAllGenres;
