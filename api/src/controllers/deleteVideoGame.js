const { Videogame } = require("../db");

const deleteVideoGame = async (id) => {
  const { name } = await Videogame.findByPk(id);
  const rowsDeleted = await Videogame.destroy({ where: { id } });
  if (rowsDeleted === 0) {
    throw new Error(`The game with the id ${id} doesnt exists`);
  }
  return `The game ${name} has been deleted`;
};

module.exports = deleteVideoGame;
