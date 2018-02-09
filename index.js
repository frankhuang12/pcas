// Require all modules
const express = require("express");
const session = require("express-session");
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const path = require("path");
const pg = require("pg");

// Server variables setup
const port = process.env.SERVER_PORT || 56789;
var app = express();
const server = require("http").createServer(app);
var io = require("socket.io")(server);
var pF = path.resolve(__dirname, "html");

// PostgrSQL connection
var pool = new pg.Pool({
    user: process.env.PGSQL_USER,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    database: process.env.PGSQL_DATABASE,
    max: process.env.PGSQL_MAX
});

// Sessions setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Route folders
app.use("/style", express.static("css"));
app.use("/script", express.static("script"));
app.use("/image", express.static("image"));
app.use("/inc", express.static("inc"));

// Routes
// Get pages
app.get("/", function (req, resp) {
    resp.sendFile(pF + "/login.html");
});

app.get("/board", function (req, resp){
    resp.sendFile(pF + "/board.html");
});

// Server listening
server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(port + " is running");
});