var path = require("path");
var router = require("express").Router();



router.get("/todos", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/todos.html"));
});
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});


module.exports = router