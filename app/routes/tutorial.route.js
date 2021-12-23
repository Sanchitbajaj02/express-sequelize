const express = require("express");
const router = express.Router();

const tutsController = require("../controllers/tutorial.cntroller");

// Create a new Tutorial
router.post("/", tutsController.create);

// Retrieve all Tutorials
router.get("/", tutsController.findAll);

// Retrieve all published Tutorials
router.get("/published", tutsController.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutsController.findOne);

// Update a Tutorial with id
router.put("/update/:id", tutsController.update);

// Delete a Tutorial with id
router.delete("/delete/:id", tutsController.deleteObject);

// Delete all Tutorials
router.delete("/delete", tutsController.deleteAll);

module.exports = router;
