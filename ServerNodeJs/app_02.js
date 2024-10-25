const http = require('http');

// localhost:3000 указываем на каком порту будет сервер
// request, respons - аргументы функции запрос - req и ответ - res
http.createServer(function(req, res){
  console.log(req.url);
  console.log(req.method);
  console.log('server work');
  res.setHeader('Content-Type', 'text/html; charset=utf-8;');
  res.write('<h2>Hello world<h2/>');
  res.write('<input class="print"/>');
  res.write('<p>Что такое<p/>');



  res.end();
}).listen(3500);