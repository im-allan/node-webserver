const http = require('node:http');

http.createServer((request: any, response: any) => {

  console.log(request);
  // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // response.writeHead(200, { 'Content-Type': 'application/csv' });
  
  response.write('Hola mundo');
  response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);