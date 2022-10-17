const { Movements } = require('../../models/Movements');

const getData = async (req, res) => {
    try {
        const response = await Movements.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: 'Error' });
    }
};

module.exports = {
    getData,
};
