const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var wt = Number(req.body.wt);
  var ht = Number(req.body.ht);
  var bmi = wt / (ht * ht);
  let bmiStr = bmi.toString();
  res.render("bmi", { valBMI: bmiStr });
});

app.listen(3000, function () {
  console.log("Server Started!");
});
