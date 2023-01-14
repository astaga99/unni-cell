const adminRoute = require("express").Router();
const adminController = require("../controllers/adminController");

adminRoute.get("/", adminController.getAllAdmin);
adminRoute.post("/", adminController.add);
adminRoute.post("/login", adminController.login);
adminRoute.put("/:id", adminController.update);
adminRoute.delete("/:id", adminController.delete);
adminRoute.get("/account/:id", adminController.getAdminById);

module.exports = adminRoute;
