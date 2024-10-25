const http = require('http');

// localhost:3000 указываем на каком порту будет сервер
// request, respons - аргументы функции запрос - req и ответ - res
http.createServer(function(req, res){
  console.log('server work')
  res.end('1');
}).listen(3500);