const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_mysql_crud",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;
