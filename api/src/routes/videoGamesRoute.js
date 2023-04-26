const { Router } = require("express");
const videoGamesRoute = Router();
const getAllGames = require("../controllers/getAllGames");
const getVideoGameById = require("../controllers/getVideoGameById");

videoGamesRoute.get("/", async (req, res) => {
  const games = await getAllGames();
  try {
    res.status(200).json(games);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
videoGamesRoute.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const videoGameById = await getVideoGameById(id);
    res.status(200).json(videoGameById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = videoGamesRoute;
