const db = require("../models");
const PersonalShopper = db.personalShopper;

// Create and Save a new personal_shopper
exports.create = (req, res) => {
  
};

// Retrieve all personal_shoppers from the database.
exports.findAll = (req, res) => {
  
};

// Find a single personal_shopper with an id
exports.findOne = (req, res) => {
  
};

// Update a personal_shopper by the id in the request
exports.update = (req, res) => {
  
};

// Delete a personal_shopper with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all personal_shoppers from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published personal_shoppers
exports.findAllPublished = (req, res) => {
  
};


exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a personal shopper
    const personal_shopper = new PersonalShopper({
      Nome: req.body.name,
      Location: req.body.location,
      Evaluation: req.body.evaluation,
    });
  
    // Save personal shopper in the database
    personal_shopper
      .save(personal_shopper)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };