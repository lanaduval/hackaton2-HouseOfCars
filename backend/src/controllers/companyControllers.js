const { verify, hash, argon2id } = require("argon2");
const models = require("../models");

const browse = (req, res) => {
  models.company
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
  const { password } = req.body;
  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  hash(password, hashingOptions).then((hashedPassword) => {
    const company = {
      ...req.body,
      hashedPassword,
    };

    // TODO validations (length, format...)

    models.company.insert(company).then(([rows]) => {
      if (rows.affectedRows === 1) {
        return res.status(201).json({ success: "User saved" });
      }
      return res.status(403).json({ error: "une erreur s'est produite" });
    });
  });
};
const put = (req, res) => {
  const company = req.body;

  // TODO validations (length, format...)

  models.company
    .update(company)
    .then(([result]) => {
      res.location(`/cars/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const signUpUser = (req, res) => {
  const { pw } = req.body;

  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(pw, hashingOptions).then((hashedPassword) => {
    const user = {
      ...req.body,
      hashedPassword,
    };
    models.user.findByMatricule(user).then(([rows]) => {
      if (rows.affectedRows === 1) {
        return res.status(201).json({ success: "User saved" });
      }
      return res.status(403).json({ error: "une erreur s'est produite" });
    });
  });
};

module.exports = {
  browse,
  add,
  put,
};
