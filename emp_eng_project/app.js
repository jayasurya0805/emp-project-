const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const userTableRouter = require("./eng_emp_table/eng_emp_table.route");
const engTableRouter = require("./eng_table/eng_table.route");
const attendanceTextEntryRouter = require("./emp_text_attendace/emp_text_attendance.router");


app.use(upload.any());
app.use("/api", userTableRouter);
app.use("/api", engTableRouter);
app.use("/api", attendanceTextEntryRouter);

app.listen(3000, console.log("server listening to port 3000"))