const { Movements } = require("../../models/Movements");

const deleteData = async (req, res) => {
    const { id } = req.params;

    try {
        await Movements.destroy({
            where: { id: id },
        });
        res.status(200).send("Delete satisfactory " + id);
    } catch (err) {
        res.status(404).send({ error: "Error" + err });
    }
};

module.exports = { deleteData };
