const express = require('express'); //load express with the use of requireJs
const app = express();
var http = require('http').createServer(app);
const morgan = require("morgan");
var io = require('socket.io')(http);
var fs = require("fs")
const cors = require("cors")
var bodyParser = require('body-parser');
app.use(morgan("dev"));

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:false}));
app.set('view engine', 'html');


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('identify',(a) => {
      console.log(a);
    });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  console.log(socket.id)

  socket.on('chat message', (json) => {
  io.to(socket.id).emit('chat message', json.chat);
});
});



http.listen(4444, () => {
    console.log('listening on *:4444');
  });