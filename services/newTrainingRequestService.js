const db = require('../config/db');
const createNewRequest = ({
    requestid, // Take requestid directly from the user input
    requestonbehalfof,
    source,
    trainingobj,
    projectid,
    newprospectname,
    numberofpeople,
    expecteddeadline,
    techstack,
    primaryskill,
    otherskill, // Ensure this matches the DB column name
    suggestedcompletioncriteria,
    comments,
    servicedivision,
}) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO newtrainingrequest (
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
                service_division
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const params = [
            requestid ?? null,  // Take requestid from user input, or set it to null if not provided
            requestonbehalfof ?? null,
            source ?? null,
            trainingobj ?? null,
            projectid ?? null,
            newprospectname ?? null,
            numberofpeople ?? null,
            expecteddeadline ?? null,
            techstack ?? null,
            primaryskill ?? null,
            otherskill ?? null, // Make sure this matches your DB column
            suggestedcompletioncriteria ?? null,
            comments ?? null,
            servicedivision ?? null
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
