const itemRoute = require("express").Router();
const itemController = require("../controllers/itemController");
const { authBrand } = require("../middlewares/authBrand");
const { authAdmin } = require("../middlewares/authAdmin")


itemRoute.get("/", itemController.getAllitem);
itemRoute.post("/", authAdmin, authBrand, itemController.add);
itemRoute.put("/:id", itemController.update);
itemRoute.delete("/:id", itemController.delete);
itemRoute.get("/data/:id", itemController.getItemById);

module.exports = itemRoute;
