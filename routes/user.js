const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const withAuth = require('../middleware');

// Update user's profile
router.put('/update', userController.updateProfile);

// Delete user's profile
router.delete('/delete', userController.deleteProfile);



module.exports = router;
