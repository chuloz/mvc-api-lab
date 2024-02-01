// controllers/membersController.js

const uuid = require('uuid');
const tours = require('../models/tours');

// Get All Members
const getAlltours = (req, res) => {
  res.json(tours);
};

// Get Single Member by ID
const gettourById = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Create a New Member
const createtour = (req, res) => {
  const newMember = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  tours.push(newMember);
  res.json(tours);
};

// Update Member by ID
const updatetour = (req, res) => {
  const found = tours.some((tour) => member.id === parseInt(req.params.id));

  if (found) {
    tours.forEach((tour, i) => {
      if (tour.id === parseInt(req.params.id)) {
        tours[i] = { ...tour, ...req.body };
        res.json({ msg: 'Member updated', tour: members[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Delete Member by ID
const deletetour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    const updatedtours = tours.filter((tour) => tour.id !== parseInt(req.params.id));
    res.json({ msg: 'Member deleted', tours: updatedtours });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAlltours,
  gettourById,
  createtour,
  updatetour,
  deletetour,
};