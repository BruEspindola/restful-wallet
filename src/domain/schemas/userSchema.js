const connectPostgres = require('../../infrastructure/context/postgress').connect;
const {DataTypes} = require('sequelize');

const sequelize = connectPostgres();
const UserSchema = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: DataTypes.UUIDV4
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  nickname: {
    type: DataTypes.STRING,
    unique: true
  },
});

UserSchema.sync().then(() => {
  console.log('User table created');
});

module.exports = UserSchema;