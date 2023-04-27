const { Genre } = require("../db");

const saveGenresApiToDb = require("../utils/saveGenresApiToDb");
const getAllGenres = async () => {
  let genresDb = await Genre.findAll();
  if (genresDb.length <= 0) {
    await saveGenresApiToDb(Genre);
  }
  return genresDb;
};

module.exports = getAllGenres;
