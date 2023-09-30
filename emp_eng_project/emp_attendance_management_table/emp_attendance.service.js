const poolx = require("../config/database");

module.exports = {
    empAttendance: (data, callback) => {
        let attendancePunchInPunchOutQuery = `INSERT INTO emp_attendance_management_table(user_id,attendance_date,punch_in,punch_out) VALUES ('${data.user_id}','${data.attendance_date}','${data.punch_in}','${data.punch_out}')`;
        poolx.query(attendancePunchInPunchOutQuery, (err, result) => {
            if (err) {
                console.log(err);
                return callback(err);
            } else {
                return callback(null, result);
            }
        });
    }
}