//controllers/newTrainingRequestController.js

const newTrainingRequestService = require('../services/newTrainingRequestService');

exports.createNewTrainingRequest = async (req, res) => {
    const {
        requestid, // Now included in the request body
        requestonbehalfof,
        source,
        trainingobj,
        projectid,
        newprospectname,
        numberofpeople,
        expecteddeadline,
        techstack,
        primaryskill,
        otherskill,
        suggestedcompletioncriteria,
        comments,
        servicedivision,
        requestedbyid,  // New field from frontend
    } = req.body;

    // Validate if all required fields are present
    if (!requestid || !requestonbehalfof || !source || !trainingobj || !projectid || !servicedivision || !requestedbyid) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Call the service to create the training request, passing the serialized employeelevel
        const newRequest = await newTrainingRequestService.createNewRequest({
            requestid,
            requestonbehalfof,
            source,
            trainingobj,
            projectid,
            newprospectname,
            numberofpeople,
            expecteddeadline,
            techstack,
            primaryskill,
            otherskill,
            suggestedcompletioncriteria,
            comments,
            servicedivision,
            requestedbyid  // Pass the requestedbyid here
        });

        res.status(201).json({ message: 'Training request created successfully', data: newRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
