module.exports = {
  HOST: process.env.MYSQLHOST || "localhost",
  USER: process.env.MYSQLUSER || "root",
  PASSWORD: process.env.MYSQLPASSWORD || "qwerty09",
  DATABASE: process.env.MYSQLDATABASE || "database_development",
  MYSQL_URL: process.env.MYSQL_URL,
  PORT: process.env.MYSQLPORT || 8081,
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

/*codigo original de maikel

  module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "qwerty09",
  DATABASE: "database_development",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}; */
