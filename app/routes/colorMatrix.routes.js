const { authJwt } = require("../middleware");
const colorTones = require("../controllers/product-color-tone.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/colors", colorTones.getAll)
};
