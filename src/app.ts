const http = require('node:http');

http.createServer((request: any, response: any) => {

  console.log(request);
  response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  response.writeHead(200, { 'Content-Type': 'application/csv' });
  response.write('id, nombre\n');
  response.write('1, allan\n');
  response.write('2, noelia\n');
  response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);