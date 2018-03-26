var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Retailer = require('../model/retailer');

router.get("/", function(request, response) {
  let query = Retailer.find({});
  query.exec((err, retailers) => {
    if (err) response.send(err);
    response.json(retailers);
  });
});

router.post("/", function(request, response) {
  var newRetailer = new Retailer(request.body);

  newRetailer.save((err,retailer) => {
    if (err) response.send(err);
    response.json({message: "Retailer sucessfully added!", retailer });
  });
});

router.put("/", function(request, response) {
  response.send("I don't see a lot of PUT requests anymore");
});

router.delete("/", function(request, response) {
  response.send("oh my, a DELETE?");
});

module.exports = router;
