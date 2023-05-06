require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getAllPlatforms = async () => {
  const platforms = new Set();
  const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
  response.data.results.forEach((game) =>
    game.platforms.forEach((platform) => platforms.add(platform.platform.name))
  );

  return Array.from(platforms);
};
module.exports = getAllPlatforms;
