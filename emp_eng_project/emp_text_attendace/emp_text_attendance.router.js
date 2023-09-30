const route = require("express").Router();
const { empTextAttendanceController } = require("./emp_text_attendance.controller");

route.use("/attendanceEntry",empTextAttendanceController);

module.exports = route;