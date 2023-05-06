const { Router } = require("express");
const videoGamesRoute = require("./videoGamesRoute");
const genresRoute = require("./genresRoute");
const platformsRoute = require("./platformsRoute");
const router = Router();
router.use("/videogames", videoGamesRoute);
router.use("/genres", genresRoute);
router.use("/platforms", platformsRoute);
router.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = router;
