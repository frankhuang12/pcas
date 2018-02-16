// Require all modules
const express = require("express");
const session = require('cookie-session');
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const path = require("path");
const pg = require("pg");

// Server variables setup
const port = process.env.SERVER_PORT || 56789;
var app = express();
const server = require("http").createServer(app);
var pF = path.resolve(__dirname, "html");

// PostgrSQL connection
var pool = new pg.Pool({
    user: process.env.PGSQL_USER,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    database: process.env.PGSQL_DATABASE,
    max: process.env.PGSQL_MAX,
    port: process.env.DB_PORT
});

// Sessions setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Route folders
app.use("/style", express.static("css"));
app.use("/scripts", express.static("scripts"));
app.use("/image", express.static("image"));
app.use("/inc", express.static("inc"));
app.use('/fonts', express.static('fonts'));

// Routes
// Get pages
app.get("/", function (req, resp) {
    resp.sendFile(pF + "/index.html");
});

app.get('/profile', function(req, resp) {
    resp.sendFile(pF + '/profile.html');
});

app.get('/edit-profile', function(req, resp) {
    resp.sendFile(pF + '/edit-profile.html');
});

app.get('/postings', function(req, resp) {
    resp.sendFile(pF + '/postings.html');
});

app.get('/my-applications', function(req, resp) {
    resp.sendFile(pF + '/my_applications.html');
});

app.get('/my-posts', function(req, resp) {
    resp.sendFile(pF + '/my_posts.html');
});

app.get('/posting/:user', function(req, resp) {
    if(req.params.user === 'interpreter') {
        resp.sendFile(pF + '/posting-details-i.html');
    } else if(req.params.user === 'coordinator') {
        resp.sendFile(pF + '/posting-details-c.html');
    }
});

app.get('/register', function(req, resp) {
    resp.sendFile(pF + '/register.html');
});

app.get('/inbox', function(req, resp) {
    resp.sendFile(pF + '/inbox.html');
});

app.get('/message', function(req, resp) {
    resp.sendFile(pF + '/message.html');
});

app.get('/create-post', function(req, resp) {
    resp.sendFile(pF + '/new.html');
});

// Server listening
server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(port + " is running");
});