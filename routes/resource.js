const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resource");


// Validate user token
router.get('/getAll', resourceController.getAll);

// Authenticate user on login
router.put('/add', resourceController.addResource);

module.exports = router;

