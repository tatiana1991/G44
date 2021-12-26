module.exports = app => {
  const personal_shopper = require("../controllers/personal_shopper.controller.js");

  var router = require("express").Router();

  // Create a new personal_shopper
  router.post("/", personal_shopper.create);

  // Retrieve all personal_shoppers
  router.get("/", personal_shopper.findAll);

  // Retrieve all personal_shoppers
  router.get("/published", personal_shopper.findAllPublished);

  // Retrieve a single personal_shopper with id
  router.get("/:id", personal_shopper.findOne);

  // Update a personal_shopper with id
  router.put("/:id", personal_shopper.update);

  // Delete a personal_shopper with id
  router.delete("/:id", personal_shopper.delete);

  // Delete all personal_shoppers
  router.delete("/", personal_shopper.deleteAll);

  app.use('/api/personal_shopper', router);
};