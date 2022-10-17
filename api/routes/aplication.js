const { Router } = require("express");
const router = Router();
const { Movements } = require("../models/Movements.js");
const { User } = require("../models/User.js");
const { getData } = require("./controllers/getData.js");
const { postData } = require("./controllers/postData.js");
const { deleteData } = require("./controllers/deleteData.js");
const { putData } = require("./controllers/putData.js");
const { registerUser } = require("./controllers/registerUser.js");
const { singIn } = require("./controllers/logInUser.js");

router.get("/", async (req, res) => {
    await getData(req, res);
});

router.post("/", async (req, res) => {
    await postData(req, res);
});

router.put("/:id"),
    async (req, res) => {
        await putData(req, res);
    };

router.delete("/:id", async (req, res) => {
    await deleteData(req, res);
});

router.post("/register", async (req, res) => {
    await registerUser(req, res);
});

router.post("/login", async (req, res) => {
    await singIn(req, res);
});

module.exports = router;
