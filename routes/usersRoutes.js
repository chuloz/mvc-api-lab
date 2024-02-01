// routers/membersRouter.js

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Get All Members
router.get('/', userController.getAllusers);

// Get Single Member by ID
router.get('/:id', userController.getuserById);

// Create a New Member
router.post('/', userController.createuser);

// Update Member by ID
router.put('/:id', userController.updateuser);

// Delete Member by ID
router.delete('/:id', userController.deleteuser);

module.exports = router;