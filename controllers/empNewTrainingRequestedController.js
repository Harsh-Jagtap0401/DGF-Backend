const empNewTrainingRequestedService = require('../services/empNewTrainingRequestedService');

exports.createEmpNewTrainingRequested = async (req, res) => {
    const { emp_id, availablefrom, dailyband, availableonweekend, createddate } = req.body;

    // Validate incoming data
    if (!emp_id || !availablefrom || !dailyband || !availableonweekend || !createddate) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the service to insert data into emp_newtrainingrequested
        const result = await empNewTrainingRequestedService.insertEmpNewTrainingRequested(
            emp_id,
            availablefrom,
            dailyband,
            availableonweekend,
            createddate
        );

        // Respond with success
        res.status(201).json({ message: 'Data inserted successfully!', data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
