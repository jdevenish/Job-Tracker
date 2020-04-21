const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resource");


// Return all resources
router.get('/getAll', resourceController.getAll);

// Add new resource
router.put('/add', resourceController.addResource);

// Delete resource
router.delete('/remove', resourceController.removeResource)

module.exports = router;

