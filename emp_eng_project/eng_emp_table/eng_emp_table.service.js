const poolx = require("../config/database");

module.exports = {
    createUser: (data, callback) => {
        console.log(data);
        // Check for duplicate entry
        let checkRegisteredUser = `SELECT * FROM emp_details_table WHERE number=${data.number}`;
        // To register query
        let userRegistrationQuery = `INSERT INTO emp_details_table (name,number,photo) VALUES ('${data.name}','${data.number}','${data.photo}')`;
        poolx.query(checkRegisteredUser, (err, result) => {
            if (err) {
                return callback(err);
            } else {
                if (result.length > 0) {
                    return callback(null, "User already exist");
                } else {
                    poolx.query(userRegistrationQuery, (err, result) => {
                        if (err) {
                            return callback(err);
                        } else {
                            return callback(null, result);
                        }
                    });
                }
            }
        });
    }
}