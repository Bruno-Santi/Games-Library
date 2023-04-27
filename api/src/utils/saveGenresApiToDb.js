const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const saveGenresApiToDb = async (model) => {
  const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const genreNames = response.data.results.map(({ name }) => {
    return name;
  });
  await model.bulkCreate(genreNames.map((name) => ({ name })));
  return model.findAll();
};

module.exports = saveGenresApiToDb;
