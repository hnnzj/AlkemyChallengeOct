const { User } = require("../../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../Auth");

const singIn = async (req, res) => {
    try {
        let { email, password } = req.body;

        await User.findOne({
            where: { email: email },
        })
            .then((user) => {
                if (!user) {
                    res.status(404).json({
                        msg: "User doesn´t exist",
                    });
                } else {
                    let chota;
                    if (bcrypt.compareSync(password, user.password)) {
                        let token = jwt.sign({ user: user }, auth.secret, {
                            expiresIn: auth.expires,
                        });
                        chota = {
                            user: user,
                            token: token,
                        };
                        res.status(200).json(chota);
                    } else {
                        res.status(401).json({ msg: "Wrong password." });
                    }
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
};

module.exports = {
    singIn,
};
