const {moveDown, moveLeft, moveRight, moveUp} = require('./constants');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.stdout.write("Exited Game.");
    process.exit();
  }

  if (key === "w") {
    connection.write(moveUp);
  }
  if (key === "s") {
    connection.write(moveDown);
  }
  if (key === "a") {
    connection.write(moveLeft);
  }
  if (key === "d") {
    connection.write(moveRight);
  }
  if (key === "q") {
    connection.write("Say: I'm winning this");
  }
  if (key === "e") {
    connection.write("Say: Stay away from that apple");
  }

};

module.exports = {setupInput};