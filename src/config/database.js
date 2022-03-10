require('dotenv').config()

const config = {
  development: {
    logging: false,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    define: {
      timestamps: true
    },
    seederStorage: 'sequelize'
  },
  test: {
    logging: false,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT_TEST,
    dialect: 'postgres',
    define: {
      timestamps: true
    },
    seederStorage: 'sequelize'
  },
  production: {
    logging: false,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    define: {
      timestamps: true
    },
    seederStorage: 'sequelize'
  }
}

module.exports = config
