const router = require("express").Router();
const { engRegistrationController, emgLoginController } = require("./eng_table.controller");

router.use("/engRegistraion", engRegistrationController);
router.use("/engLogin", emgLoginController)

module.exports = router;