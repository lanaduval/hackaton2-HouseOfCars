const models = require("../models");

const browse = (req, res) => {
  models.cars
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const cars = req.body;

  // TODO validations (length, format...)

  models.cars
    .insert(cars)
    .then(([result]) => {
      res.location(`/cars/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
