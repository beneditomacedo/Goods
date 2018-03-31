const express = require('express');
const router = express.Router();
const Retailer = require('../models/Retailer');

// Returns all retailers

router.get('/', function(req, res) {
  Retailer.find({}, function (err, retailers) {
    if (err) return res.status(500).send(err);
    res.status(200).send(retailers);
  });
});

// Return a single retailer

router.get('/:id', function (req, res) {
  Retailer.findById(req.params.id, function (err, retailer) {
    if (err) return res.status(500).send(err);
    if(!retailer) return res.status(404).send({message: 'Retailer not found'});
    res.status(200).send(retailer);
  });
});

// Creates a new retailer

router.post('/', function(req, res) {
  Retailer.create({
    name: req.body.name
  },
  function(err,retailer) {
    if (err) return res.status(500).send(err);
    res.status(200).send({message: 'Retailer sucessfully added!', retailer });
  });
});

// Deletes a single retailer

router.delete('/:id', function(req, res) {
  Retailer.findByIdAndRemove(req.params.id, function (err, retailer) {
    if (err) return res.status(500).send(err);
    if(!retailer) return res.status(404).send({message: 'Retailer not found'});
    res.status(200).send(retailer);
  });
});

// Updates a single retailer

router.put('/:id', function(req, res) {
  Retailer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, retailer) {
    if (err) return res.status(500).send(err);
    if(!retailer) return res.status(404).send({message: 'Retailer not found'});
    res.status(200).send(retailer);
  });
});

module.exports = router;
