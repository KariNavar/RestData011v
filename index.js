const jsonServer = require("json-server");
const server = jsonServer.creare();
const router = jsonSErver.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);
server.listen(port);

