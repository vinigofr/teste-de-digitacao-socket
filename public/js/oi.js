const socket = window.io();

const textDiv = window.document.getElementById('text');

socket.on('exibir', (text) =>{
  console.log('entrou no inner text');
  textDiv.innerText = text
});

window.onbeforeunload = function(event) {
  socket.disconnect();
};