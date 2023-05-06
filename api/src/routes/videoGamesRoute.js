const { Router } = require("express");
const videoGamesRoute = Router();
const validate = require("../utils/validate");
const getAllGames = require("../controllers/getAllGames");
const getVideoGameById = require("../controllers/getVideoGameById");
const createVideoGame = require("../controllers/createVideoGame");
const getGamesByGenre = require("../controllers/getGamesByGenre");

videoGamesRoute.get("/genre", async (req, res) => {
  const { name } = req.query;
  try {
    const games = await getGamesByGenre(name);
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

videoGamesRoute.get("/", async (req, res) => {
  const { name } = req.query;
  const games = name ? await getAllGames(name) : await getAllGames();
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
videoGamesRoute.post("/", validate, async (req, res) => {
  const {
    name,
    description,
    platforms,
    background_image,
    released,
    metacritic,
    genre,
  } = req.body;
  try {
    const newVideoGame = await createVideoGame({
      name,
      description,
      platforms,
      background_image,
      released,
      metacritic,
      genre,
    });
    res.status(200).json({ created: "ok", newVideoGame });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = videoGamesRoute;
