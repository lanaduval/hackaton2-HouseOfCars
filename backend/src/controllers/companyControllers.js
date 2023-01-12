const { verify, hash, argon2id } = require("argon2");
const { generateToken } = require("../services/jwt");
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

const login = (req, res) => {
  const { email, password } = req.body;

  models.company
    .findByEmail(email)
    .then(([[company]]) => {
      if (!company) {
        return res.status(403).json({ error: "Company not found" });
      }
      // vérifier le MDP
      verify(company.password, password)
        .then((match) => {
          if (match) {
            // 3 je retourne mon token//
            const token = generateToken({
              id: company.id,
              email: company.email,
            });
            return res
              .cookie("company_auth", token, { httpOnly: true, secure: false })
              .status(200)
              .json({ token, sucess: "Company logged" });
          }
          return res.status(403).json({ error: "password incorrect" });
        })
        .catch((error) => {
          console.error(error);
        });
      return false;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  put,
  login,
};
