
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// const db = require("./public/assets/js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================
app.use("/api",require("./routes/api-routes.js"));
app.use("/",require("./routes/html-routes.js"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

