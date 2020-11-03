const server = require("./app.js")();

const dotenv = require("dotenv");
const connectDB = require("./lib/connectDB");

dotenv.config();

const socketio = require("socket.io");
const port = Number(process.env.PORT) || 4444;

connectDB();

server.listen(port, () => console.log(`http://localhost:${port}`)).on("error", (err) => console.error(err));

const io = socketio.listen(51234);

//나주엥 파일 분리 해주세요
io.on("connection", (socket) => {
	console.log("a user connected");

	socket.on("identify", (a) => {
		console.log(a);
	});

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});

	console.log(socket.id);

	socket.on("chat message", (json) => {
		io.to(socket.id).emit("chat message", json.chat);
	});
});
