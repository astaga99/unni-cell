const route = require("express").Router();
const adminRoute = require("./admin");
const itemRoute = require("./item");
const brandRoute = require("./brand");

route.get("/api", (req, res) => {
  res.status(200).json({
    message: "Dashboard Unni-Cell",
  });
});

route.use("/api/admins", adminRoute);
route.use("/api/items", itemRoute);
route.use("/api/brands", brandRoute);

module.exports = route;
