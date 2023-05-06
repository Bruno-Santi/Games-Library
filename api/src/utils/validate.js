const validate = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  next();
};

module.exports = validate;
