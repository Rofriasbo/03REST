const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authenticateApiKey = require('../middleware/authMiddleware');

router.get('/', authenticateApiKey, projectController.getAllProjects);
router.post('/', authenticateApiKey, projectController.createProyect);

module.exports = router;
