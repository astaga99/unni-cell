const brandRoute = require("express").Router();
const brandController = require("../controllers/brandController");

brandRoute.get("/", brandController.getAllBrand);
brandRoute.post("/", brandController.add);
brandRoute.put("/:id", brandController.update);
brandRoute.delete("/:id", brandController.delete);
brandRoute.get("/account/:name", brandController.getBrandByName);

module.exports = brandRoute;