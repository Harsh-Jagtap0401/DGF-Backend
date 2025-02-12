const newTrainingRequestService = require('../services/newTrainingRequestService');

// Controller method to handle creating a new training request
exports.createNewTrainingRequest = async (req, res) => {
    const {
        requestonbehalfof,
        source,
        trainingobj,
        projectid,
        newprospectname,
        numberofpeople,
        expecteddeadline,
        techstack,
        primaryskill,
        otherskills,
        suggestedcompletioncriteria,
        comments,
        servicedivision,
        employeelevel // Array of employee level IDs (e.g., [1, 2, 3])
    } = req.body;

    // Validate if all required fields are present
    if (!requestonbehalfof || !source || !trainingobj || !projectid || !servicedivision) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Serialize the employeelevel array into a JSON string
    const serializedEmployeeLevel = JSON.stringify(employeelevel);

    try {
        // Call the service to create the training request, passing the serialized employeelevel
        const newRequest = await newTrainingRequestService.createNewRequest({
            requestonbehalfof,
            source,
            trainingobj,
            projectid,
            newprospectname,
            numberofpeople,
            expecteddeadline,
            techstack,
            primaryskill,
            otherskills,
            suggestedcompletioncriteria,
            comments,
            servicedivision,
            employeelevel: serializedEmployeeLevel // Save it as a JSON string
        });

        res.status(201).json({ message: 'Training request created successfully', data: newRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
