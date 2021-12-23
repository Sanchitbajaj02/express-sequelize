const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sanchit's application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
