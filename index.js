import express from "express";

("use strict");

// Json
const fs = require("fs");

let rawdata = fs.readFileSync("collections.json");
let collections = JSON.parse(rawdata);
console.log(collections);

// Maak een nieuwe express app
const app = express();

// Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Stel het poortnummer in en start express
app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
