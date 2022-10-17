const { User } = require("../../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../Auth");

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    let pass = bcrypt.hashSync(password, +auth.rounds);

    await User.create({
        username: username,
        email: email,
        password: pass,
    })
        .then((user) => {
            let token = jwt.sign({ user: user }, auth.secret, {
                expiresIn: auth.expires,
            });
            res.status(200).json({
                user: user,
                token: token,
            });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = { registerUser };
