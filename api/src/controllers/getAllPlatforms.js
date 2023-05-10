require("dotenv").config();
const { API_KEY } = process.env;

const getAllPlatforms = () => {
  const platforms = new Set();

  return fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((game) =>
        game.platforms.forEach((platform) =>
          platforms.add(platform.platform.name)
        )
      );

      return Array.from(platforms);
    })
    .catch((error) => console.log(error));
};

module.exports = getAllPlatforms;
