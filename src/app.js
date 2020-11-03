const express = require("express"); //load express with the use of requireJs
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

module.exports = () => {
	app.use(helmet());
	app.use(morgan("dev"));
	app.use(cors());
	app.use(express.static("public"));
	app.use(express.urlencoded({ extended: true, limit: "30mb" }));
	app.use(express.json({ limit: "30mb" }));
	app.set("view engine", "html");

	return http.createServer(app);
};
