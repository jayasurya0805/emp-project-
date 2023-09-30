const poolx = require("../config/database");

module.exports = {
    engLogin: (data, callback) => {
        let engLoginNumberCheckQuery = `SELECT * FROM eng_details_table WHERE eng_mobile_number = ${data.eng_mobile_number}`;
        let engLogin = `SELECT * FROM eng_details_table WHERE eng_mobile_number = '${data.eng_mobile_number}'`
        poolx.query(engLoginNumberCheckQuery, (err, result) => {
            if (err) {

                return callback(err);
            } else {
                if (result.length > 0) {
                    poolx.query(engLogin, (err, result) => {
                        if (err) {
                            console.log(err);
                            return callback(err);
                        } else {
                            console.log(result[0].eng_password);
                            if(result[0].eng_password == data.eng_password){
                                return callback(null, result);
                            } else {
                                return callback(null,"Incorrect password")
                            }
                            
                        }
                    });
                } else {
                    return callback(null, "User not found");
                }
            }
        });
    },
    engRegistration: (data, callback) => {
        let engRegistrationQuery = `INSERT INTO eng_details_table(eng_mobile_number,eng_name,eng_password) VALUES('${data.eng_mobile_number}','${data.eng_name}','${data.eng_password}')`;
        let engRegistrationDuplicate = `SELECT * FROM eng_details_table WHERE eng_mobile_number = '${data.eng_mobile_number}'`;

        poolx.query(engRegistrationDuplicate, (err, result) => {
            if (err) {
                return callback(err);
            } else if (result.length > 0) {
                return callback(null, "User already exist");
            } else {
                poolx.query(engRegistrationQuery, (err, result) => {
                    if (err) {
                        return callback(err);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });

    }
}