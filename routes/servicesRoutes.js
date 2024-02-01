// routers/membersRouter.js

const express = require('express');
const servicesController = require('../controllers/servicesController');
const router = express.Router();

// Get All Members
router.get('/', servicesController.getAllservices);

// Get Single Member by ID
router.get('/:id', servicesController.getserviceById);

// Create a New Member
router.post('/', servicesController.createservice);

// Update Member by ID
router.put('/:id', servicesController.updateservice);

// Delete Member by ID
router.delete('/:id', servicesController.deleteservice);

module.exports = router;