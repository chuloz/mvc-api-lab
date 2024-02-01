// controllers/membersController.js

const uuid = require('uuid');
const users = require('../models/users');

// Get All Members
const getAllusers = (req, res) => {
  res.json(users);
};

// Get Single Member by ID
const getuserById = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Create a New Member
const createuser = (req, res) => {
  const newMember = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  users.push(newMember);
  res.json(users);
};

// Update Member by ID
const updateuser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    users.forEach((user, i) => {
      if (user.id === parseInt(req.params.id)) {
        users[i] = { ...user, ...req.body };
        res.json({ msg: 'Member updated', users: users[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Delete Member by ID
const deleteuser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updatedusers = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json({ msg: 'Member deleted', users: updatedusers });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllusers,
  getuserById,
  createuser,
  updateuser,
  deleteuser,
};