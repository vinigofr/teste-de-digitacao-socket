module.exports = (io) => io.on('connection', (socket) => {
  console.log(`${socket.id} acabou de se conectar!`);
  socket.on('digitando', (data) => {
    console.log(data);
    io.emit('exibir', data);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} desconectou`);
  });

});
