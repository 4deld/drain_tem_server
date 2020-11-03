const express = require("express"); //load express with the use of requireJs
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
var ip = require("ip");

console.dir ( ip.address() );
console.log(ip.address())

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

app.get('/',function(req,res){
	// var ip = 
	// req.headers['x-forwarded-for'] ||
    // req.connection.remoteAddress ||
    // req.socket.remoteAddress ||
    // req.connection.socket.remoteAddress;
	// console.log(ip)
	res.sendFile(__dirname+'/public/index.html');
});


app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ limit: "30mb" }));
app.set("view engine", "html");


const dotenv = require("dotenv");
const connectDB = require("./lib/connectDB");

dotenv.config();

const port = Number(process.env.PORT) || 4444;

connectDB();

http.listen(port, () => console.log(`http://localhost:${port}`)).on("error", (err) => console.error(err));


//나주엥 파일 분리 해주세요
io.on("connection", (socket) => {
	var mainroom = []
	var fly=true
	var roomescapeclear=true

	console.log("a user connected");

	socket.on("identify", (obj) => {
		var id = obj.socketid
		//this.mainroom.push({id})
		if(obj.name=="maingame"){
			io.to(id).emit("data",{
				"fly" : fly,
				"roomescapeclear" : roomescapeclear
			})
		}
	});

	socket.on("fly",()=>{
		fly=true
		socket.emit('fly')
	})

	socket.on("roomescapeclear",()=>{
		roomescapeclear=true
		console.log('r')
		socket.emit('roomescapeclear')
	})

	//socket.on("disconnect", (data) => [userlist.deleteUser(socket.id)]);


	console.log(socket.id);

	socket.on("chat message", (json) => {
		io.to(socket.id).emit("chat message", json.chat);
	});

});
