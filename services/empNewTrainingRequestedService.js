const db = require('../config/db');

// Function to insert data into emp_newtrainingrequested
const insertEmpNewTrainingRequested = async (emp_id, availablefrom, dailyband, availableonweekend, createddate) => {
    return new Promise((resolve, reject) => {
        // Get the last requestid from newtrainingrequest table and increment it by 1
        const getLastRequestIdQuery = `
            SELECT MAX(requestid) AS last_requestid FROM newtrainingrequest;
        `;

        db.execute(getLastRequestIdQuery, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                const nextRequestId = result[0].last_requestid ;

                // Insert data into emp_newtrainingrequested
                const insertQuery = `
                    INSERT INTO emp_newtrainingrequested (emp_id, availablefrom, dailyband, availableonweekend, requestid, createddate)
                    VALUES (?, ?, ?, ?, ?, ?);
                `;

                db.execute(insertQuery, [emp_id, availablefrom, dailyband, availableonweekend, nextRequestId, createddate], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
};

module.exports = {
    insertEmpNewTrainingRequested,
};
