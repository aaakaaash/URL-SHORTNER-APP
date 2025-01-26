const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");


router.get("/auth/google", authController.googleLogin); 
router.get("/auth/google/callback", authController.googleCallback);


module.exports = router;