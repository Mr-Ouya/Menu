var sequelize = ("sequelize");
var express = require("express");
var PORT = process.env.PORT || 3001;
const routes = require("./routes/api-routes");





// Sets up the Express App
// =============================================================
var app = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function(err, data) {
  //console.log(err, data);
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});