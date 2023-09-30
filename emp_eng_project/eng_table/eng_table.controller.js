const { engRegistration, engLogin } = require("./eng_table.service");

module.exports = {
    emgLoginController: (req, res) => {
        let body = req.body;
        console.log(body);
        engLogin(body, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: "Something went wrong while connecting with db"
                });
            } else if (result == "User not found") {
                return res.status(401).json({
                    status: 0,
                    message: result
                });
            } else if (result == "Incorrect password") {
                return res.status(401).json({
                    status: 0,
                    message: result
                });
            }
            else {
                return res.status(200).json({
                    status: 1,
                    message: "User data found",
                    data: result
                });
            }
        });
    },
    engRegistrationController: (req, res) => {
        let body = req.body;
        console.log(body);
        engRegistration(body, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: "Something went wrong while connecting with db"
                });
            } else if (result == "User already exist") {
                return res.status(401).json({
                    status: 0,
                    message: result
                });
            }
            else {
                return res.status(200).json({
                    status: 1,
                    message: "Data inserted successfully"
                });
            }
        });
    }
}