const express = require('express');
const router = express.Router();
// const downloadController = require('../controllers/downloadVideoController.js');
const downloadController = require('../controllers/downloadVideoController.js');

// POST request to handle video download
router.post('/', downloadController);

module.exports = router;
