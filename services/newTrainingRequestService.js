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
    employeelevel // This is passed as a JSON string
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
                service_division,
                employeelevel
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
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
            servicedivision,
            employeelevel // Saving as a JSON string for now
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
