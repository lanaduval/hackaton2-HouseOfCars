const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// CARS
const carControllers = require("./controllers/carsControllers");

router.get("/cars", carControllers.browse);
router.post("/cars", carControllers.add);
router.get("/cars/:id", carControllers.carsID);

// COMPAGNY

const companyControllers = require("./controllers/companyControllers");

router.post("/register", companyControllers.add);
router.post("/login", companyControllers.login);
router.put("/register", companyControllers.put);

module.exports = router;
