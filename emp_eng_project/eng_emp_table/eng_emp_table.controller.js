const { createUser } = require("./eng_emp_table.service");

module.exports = {
    createUserController: (req, res) => {
        let body = req.body;
        // console.log(body);
        createUser(body, (err, result) => {
            if (err) {
                console.log(err);
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