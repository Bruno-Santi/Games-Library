const validate = (req, res, next) => {
  const { name, description, rating, platforms } = req.body;

  if (!name || !description || !rating || platforms.length < 1) {
    return res.status(400).json({ error: "Missing data..." });
  }

  next();
};

module.exports = validate;
