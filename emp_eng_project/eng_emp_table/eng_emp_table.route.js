const router = require("express").Router();
const { createUserController } = require("./eng_emp_table.controller");


router.post("/createUsers",createUserController);

module.exports = router;