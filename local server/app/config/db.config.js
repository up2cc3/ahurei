module.exports = {
  "production": {
    HOST: "localhost",
    USER: "Ahurei",
    PASSWORD: "CAuzhqjhPNcXQ1PI",
    DB: "ahurei",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  "magento": {
    HOST: "localhost",
    USER: "Ahurei",
    PASSWORD: "CAuzhqjhPNcXQ1PI",
    DB: "magento",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
}
