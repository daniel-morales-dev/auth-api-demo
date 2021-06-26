import app from "../app";
import debug from "debug";
import http from "http";
debug("express-good-example:server");
const port: number | false = normalizePort(Number(process.env.PORT));
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: number) {
  const PORT = val;
  if (isNaN(PORT)) {
    // named pipe
    return val;
  }
  if (PORT >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  if (!addr) return;
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log("Server on port", port);
}
