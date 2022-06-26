const socket = window.io();

const input = window.document.querySelector('input');

input.addEventListener('input', () => {
  socket.emit('digitando', input.value);
  return false;
});

window.onbeforeunload = function(event) {
  socket.disconnect();
};