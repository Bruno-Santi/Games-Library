const { Router } = require("express");
const getAllPlatforms = require("../controllers/getAllPlatforms");
const platformsRoute = Router();

platformsRoute.get("/", async (req, res) => {
  try {
    const platforms = await getAllPlatforms();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = platformsRoute;
