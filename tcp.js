var net=require('net');
const POST=18001;
const HOST='127.0.0.1';
var clientHander=function (socket) {
    console.log('someone connected');
    socket.on('data',function (data) {
        console.log(socket.remoteAddress,socket.remotePort,'send',data);
    });
    socket.on('close',function () {
        console.log(socket.remoteAddress,socket.remotePort,'disconnected');
    });
};
var app=net.createServer(clientHander);
app.listen(POST,HOST);
