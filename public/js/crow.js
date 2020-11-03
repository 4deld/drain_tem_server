const crow = document.getElementsByClassName('crowimg')[0]
const button = document.getElementsByClassName('btn')[0]


const socket = io();

var h = 33

button.addEventListener("click",fly)

function fly(){
    h-=5
    crow.style.top = h+"vh"
    socket.emit("fly")
}


