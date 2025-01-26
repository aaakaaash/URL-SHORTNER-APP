const env = require('dotenv').config();
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

db();

const routes = require("./router/route"); 

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173", 
        credentials: true, 
    })
);


app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:72*60*60*1000
    }
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(routes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
