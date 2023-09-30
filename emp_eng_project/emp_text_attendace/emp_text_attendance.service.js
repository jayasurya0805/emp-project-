const poolx = require("../config/database");

module.exports = {
    empTextAttendance: (data, callback) => {
        let checkUserId = `INSERT INTO emp_text_attendance(user_id, date, worked_hours) VALUES('${data.user_id}', '${data.date}', '${data.worked_hours}')`;
        poolx.query(checkUserId, (err, result) => {
            if (err) {
                console.log(err);
                return callback(err);
            } else {
                return callback(null, result);
            }
        });

    }
}