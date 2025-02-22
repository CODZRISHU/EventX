const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createEvent); // Protect event creation
router.get('/', getEvents);
router.put('/:id', protect, updateEvent); // Protect event update
router.delete('/:id', protect, deleteEvent); // Protect event deletion

module.exports = router;

