const { empAttendance } = require("./emp_attendance.service");

module.exports = {
    empAttendanceController: (req, res) => {
        let body = req.body;
        console.log(body);

        empAttendance(body, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: "Something went wrong while connecting with db"
                });
            } else {
                if (body.punch_type == 0) {
                    return res.status(200).json({
                        status: 1,
                        message: "Punch out successfully"
                    });
                } else {
                    return res.status(200).json({
                        status: 1,
                        message: "Punch in successfully"
                    });
                }

            }
        });
    }
}