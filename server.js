const sequelize = ("sequelize");
const express = require("express");
const routes = require("./routes");
//const routes = require("./routes/api-routes");
const session = require('express-session');
const path = require('path')




var db = require("./models");

var app = express();
var PORT = process.env.PORT || 5000 || "mysql://t0i7pirl1legduv4:zaivmxg4dgnuuy03@jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/d4iomu0albnc3a30 d";




// Sets up the Express App
// =============================================================


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and vie

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory



app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "./client/build/index.html")))

// Routes
app.use(routes);


var syncOptions = {
  force: false,
  // logging: console.log
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;