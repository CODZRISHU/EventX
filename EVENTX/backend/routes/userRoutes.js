const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController'); // Ensure this path is correct

const router = express.Router();

router.post('/register', registerUser); // Register route
router.post('/login', loginUser); // Login route

module.exports = router;
