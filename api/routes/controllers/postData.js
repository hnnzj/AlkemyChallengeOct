const { Movements } = require("../../models/Movements");

const postData = async (req, res) => {
    const { concept, amount, created_date, type, userId, category } = req.body;

    try {
        const newMovement = await Movements.create({
            concept,
            amount,
            created_date,
            type,
            email: userId,
            category,
        });

        res.status(200).send(newMovement);
    } catch (err) {
        console.log(err);
    }
};

module.exports = { postData };
