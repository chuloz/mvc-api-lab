// routers/membersRouter.js

const express = require('express');
const toursController = require('../controllers/toursController');
const router = express.Router();

// Get All Members
router.get('/', toursController.getAlltours);

// Get Single Member by ID
router.get('/:id', toursController.gettourById);

// Create a New Member
router.post('/', toursController.createtour);

// Update Member by ID
router.put('/:id', toursController.updatetour);

// Delete Member by ID
router.delete('/:id', toursController.deletetour);

module.exports = router;