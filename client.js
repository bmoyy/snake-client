const net = require("net");
const {IP, PORT} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: MOY");
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  

  return conn;
};

module.exports = {connect};