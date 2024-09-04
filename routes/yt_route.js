const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/downloadVideoController.js');

// POST request to handle video download
router.post('/', youtubeController.downloadController);

module.exports = router;
