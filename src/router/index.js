const auth = require("./auth");
const router = require("express").Router();

router.use("/auth", auth);

// API Documentation
router.route("/swagger.json").get((req, res) => {
    // Read the generated Swagger file (swagger_output.json)
    const swaggerDocument = require("../../swagger_output.json");
    res.json(swaggerDocument);
  });;

module.exports = router;