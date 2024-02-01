// controllers/membersController.js

const uuid = require('uuid');
const services = require('../models/services');

// Get All Members
const getAllservices = (req, res) => {
  res.json(services);
};

// Get Single Member by ID
const getserviceById = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    res.json(services.filter((service) => service.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Create a New Member
const createservice = (req, res) => {
  const newMember = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newMember.title || !newMember.text) {
    return res.status(400).json({ msg: 'Please include a title and text' });
  }

  services.push(newMember);
  res.json(services);
};

// Update Member by ID
const updateservice = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    services.forEach((service, i) => {
      if (service.id === parseInt(req.params.id)) {
        services[i] = { ...service, ...req.body };
        res.json({ msg: 'Member updated', service: services[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Delete Member by ID
const deleteservice = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    const updatedservices = services.filter((service) => service.id !== parseInt(req.params.id));
    res.json({ msg: 'Member deleted', services: updatedservices });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllservices,
  getserviceById,
  createservice,
  updateservice,
  deleteservice,
};