const { Movements } = require("../../models/Movements");

const putData = async (req, res) => {
    const { id } = req.params;
    const { concept, amount } = req.body;

    const infoToUpdate = {
        concept: concept,
        amount: amount,
    };

    try {
        await Movements.update(infoToUpdate, { where: { id: id } });
        res.status(200).send("Successfully updated");
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { putData };
