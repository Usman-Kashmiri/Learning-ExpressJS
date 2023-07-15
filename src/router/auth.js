const express = require("express");
const auth = require("../controllers/authController");
// const isAuthenticated = require("../middleware/auth");
const router = express.Router();
const { validateAuth } = require("../validators/authValidator");

//post
router.route("/register").post(validateAuth("register"), auth.register);
router.route("/login").post(validateAuth("login"), auth.login);
// router.route("/requestEmailToken").post(auth.requestEmailToken);

//get
router.route("/logout").get(auth.logout);
// router.route("/verifyEmail").post(auth.verifyEmail);
// router.route("/forgotPassword").post(auth.forgotPassword);
//put
// router.route("/resetPassword").put(auth.resetPassword);
// router.route("/updatePassword").put(isAuthenticated, auth.updatePassword);

module.exports = router;
