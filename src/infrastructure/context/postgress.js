const { Sequelize } = require("sequelize");
const environment = require("../../../env");

const connect = () => {
    const sequelize = new Sequelize(
      environment.postgresDB.database,
      environment.postgresDB.user,
      environment.postgresDB.password,
      {
        host: environment.postgresDB.host,
        dialect: environment.postgresDB.dialect,
      }
    );

    sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

    return sequelize;
};

module.exports = { connect };
