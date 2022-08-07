const http = require('http');
const { handler } = require('./routes');

const routes = require('./routes'); // route 객체 정의

console.log(routes.someText);

const server = http.createServer(routes, handler);

server.listen(3000);
