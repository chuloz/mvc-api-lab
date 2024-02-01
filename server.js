// routers/membersRouter.js

const express = require('express');
const servicesController = require('../controllers/servicesController');
const toursController = require('../controllers/toursController');
const userController = require('../controllers/userController');
const router = express.Router();

// Get All Members
router.get('/', servicesController.getAllservices);
router.get('/', toursController.getAlltours);
router.get('/', userController.getAllusers);

// Get Single Member by ID
router.get('/:id', servicesController.getserviceById);
router.get('/:id', toursController.gettourById);
router.get('/:id', userController.getuserById);

// Create a New Member
router.post('/', servicesController.createservice);
router.post('/', toursController.createtour);
router.post('/', userController.createuser);

// Update Member by ID
router.put('/:id', servicesController.updateservice);
router.put('/:id', toursController.updatetour);
router.put('/:id', userController.updateuser);

// Delete Member by ID
router.delete('/:id', servicesController.deleteservice);
router.delete('/:id', toursController.deletetour);
router.delete('/:id', userController.deleteuser);

module.exports = router;