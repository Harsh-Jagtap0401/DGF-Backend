const express = require('express');
const router = express.Router();
const empNewTrainingRequestedController = require('../controllers/empNewTrainingRequestedController');

// Route for inserting data into emp_newtrainingrequested
router.post('/empTrainingRequest', empNewTrainingRequestedController.createEmpNewTrainingRequested);

module.exports = router;
