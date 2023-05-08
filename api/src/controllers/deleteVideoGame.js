const { Videogame } = require("../db");

const deleteVideoGame = async (id) => {
  const { name } = await Videogame.findByPk(id);
  const rowsDeleted = await Videogame.destroy({ where: { id } });
  if (rowsDeleted === 0) {
    throw new Error(`El juego con el id ${id} no existe`);
  }
  return `Se ha eliminado con exito el juego ${name}`;
};

module.exports = deleteVideoGame;
