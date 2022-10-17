const { Router } = require("express");
var cors = require("cors");
const router = Router();

const aplication = require("./aplication");

router.use(cors());

router.use("/app", aplication);

module.exports = router;
