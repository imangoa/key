var http=require('http');
http.createServer(function (request,response) {
    //发送http头部
    //http状态值：200 OK
    //内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    //发送响应数据“hello world”
    response.end("<div style='background: aqua;width:100px;height:100px'></div>");
}).listen(8888);