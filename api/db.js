const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    // "postgres://username:password@host:port/database",
    'postgres://username:password@host:port/database',
    {
        logging: false,
    }
);

module.exports = {
    sequelize,
};
