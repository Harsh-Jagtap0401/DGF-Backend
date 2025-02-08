// routes/trainingRoutes.js
const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

// Route to fetch training objectives by source_id
router.get('/objectives', trainingController.getTrainingObjectivesBySource);

module.exports = router;
