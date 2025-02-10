// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const techstackRoutes = require('./routes/techstackRoutes'); // Import the techstack routes
const primarySkillRoutes = require('./routes/primarySkillRoutes'); // Import the primary skill routes
const projectRoutes = require('./routes/projectRoutes'); // Import the project routes
const employeeRoutes = require('./routes/employeeSearchByNameRoutes'); // Import the employee routes
const employeeSearchByEmailRoutes = require('./routes/employeeSearchByEmailRoutes'); // Import the employee search by email routes

// Create an instance of the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Built-in Express middleware to parse JSON request bodies

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/role', roleRoutes); // Role-related routes
app.use('/api/training', trainingRoutes); // Training-related routes
app.use('/api/techstack', techstackRoutes); // Tech stack-related routes
app.use('/api/primaryskill', primarySkillRoutes); // Primary skill-related routes
app.use('/api/project', projectRoutes); // Project-related routes
app.use('/api/employee', employeeRoutes); // Employee-related routes
app.use('/api/employee', employeeSearchByEmailRoutes); // Employee search by email route

// Error handling middleware (optional but useful for debugging)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
