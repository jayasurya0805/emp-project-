const { empTextAttendance } = require("./emp_text_attendance.service");

module.exports = {
    empTextAttendanceController: (req, res) => {
        let body = req.body;
        console.log(body);

        let array = req.body.array.split(",");
        console.log(array[0]);

        empTextAttendance(body, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: "Something went wrong while connecting db"
                });

            } else {
                return res.status(200).json({
                    status: 1,
                    message: "Data inserted successfully"
                });
            }
        });
    }
}