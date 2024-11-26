const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('app/public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.join('sample room');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.to('sample room').emit('chat message', {
      data: msg
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});