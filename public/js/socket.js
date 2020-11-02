const btn = document.getElementById('btn')
const num = document.getElementById('num')

var socket = io();
        

  $(function () {
    var socket = io();
    $('form').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });


function upkey(){
}