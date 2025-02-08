const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const trainingRoutes = require('./routes/trainingRoutes'); // Import the training routes

// Create an instance of the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Built-in Express middleware to parse JSON request bodies

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/role', roleRoutes); // Role-related routes
app.use('/api/training', trainingRoutes); // Training-related routes

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
