var express = require('express');
var router = express.Router();

router.get("/", function(request, response) {
  response.json({name: "Wall Mart"});
});

router.post("/", function(request, response) {
  response.send("a POST request? nice");
});

router.put("/", function(request, response) {
  response.send("I don't see a lot of PUT requests anymore");
});

router.delete("/", function(request, response) {
  response.send("oh my, a DELETE?");
});

module.exports = router;
