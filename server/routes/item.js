const itemRoute = require("express").Router();
const itemController = require("../controllers/itemController");

itemRoute.get("/", itemController.getAllitem);
itemRoute.post("/", itemController.add);
itemRoute.put("/:id", itemController.update);
itemRoute.delete("/:id", itemController.delete);
itemRoute.get("/account/:name", itemController.getItemByName);

module.exports = itemRoute;