const db = require('../config/db');

// Function to insert a new training request into the database
const createNewRequest = ({
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
}) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO newtrainingrequest (
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
                service_division
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const params = [
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
            servicedivision
        ];

        db.execute(query, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results); // Return the result of the insert
            }
        });
    });
};

module.exports = {
    createNewRequest
};
