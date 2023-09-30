const { empAttendanceController } = require("./emp_attendance.controller");
const router = require("express").Router();

router.use("/empAttendaceEntry",empAttendanceController);

module.exports = router;