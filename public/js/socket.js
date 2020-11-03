const input = document.getElementById('m')
const btn = document.getElementById('btn')



const socket = io();
socket.on('connect', () => {
      var json = {
      'name':'index',
      'socketid' : socket.id
  }
      socket.emit('identify', json);
});


socket.on('chat message', (msg) => {
    console.log(msg);
    console.log(socket.id)
});

btn.addEventListener("click",()=>{
  var json = {
    'chat' : input.value,
    'socketid' : socket.id
  }
  socket.emit('chat message', json);
  
  input.value=""
})


function upkey(){
}