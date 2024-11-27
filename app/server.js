const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('app/public'));

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  console.log('a user connected:', userId);

  socket.join('room_a');
  socket.join(`user:${userId}`);

  socket.broadcast.to('room_a').emit('join', userId);

  socket.on('start_connection', (userId, joinUserId) => {
    socket.join(`user: ${joinUserId}`);

    console.log('Start Connection');
    socket.broadcast.to(`user:${joinUserId}`).emit('start_connection', joinUserId, userId);
  });

  socket.on('offer_sdp', (msg, id, userId, opponentUserId) => {
    console.log('Offer SDP: ' + msg);
    socket.broadcast.to(`user:${opponentUserId}`).emit('offer_sdp', {
      data: msg,
      id: id,
      userId: opponentUserId,
      opponentUserId: userId
    });
  });

  socket.on('answer_sdp', (msg, id, userId, opponentUserId) => {
    console.log('Answer SDP: ' + msg);
    socket.broadcast.to(`user:${opponentUserId}`).emit('answer_sdp', {
      data: msg,
      id: id,
      userId: opponentUserId,
      opponentUserId: userId
    });
  });

  socket.on('ice_candidate', (msg, id, userId, opponentUserId) => {
    console.log('Ice Candidate: ' + msg);
    socket.broadcast.to(`user:${opponentUserId}`).emit('ice_candidate', {
      data: msg,
      id: id,
      userId: opponentUserId,
      opponentUserId: userId
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});