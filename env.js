const environment = {
  mongoDBUri: process.env.MONGO_DB_URI,
  postgresDB: {
    database: process.env.POSTGRES_DB_DATABASE,
    user: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_HOST,
    dialect: process.env.POSTGRES_DB_DIALECT,
  },
}

module.exports = environment;