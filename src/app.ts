const http = require('node:http');

http.createServer((request: any, response: any) => {

  console.log(request);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  const persona = {
    id: 0,
    name:'Allan'
  }
  response.write(JSON.stringify(persona));
  response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);