
const passport = require("../config/passport");

exports.googleCallback = passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "http://localhost:5173/dashboard"
});

exports.googleLogin = passport.authenticate("google", {
    scope: ["profile", "email"]
});
