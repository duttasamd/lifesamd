var express = require("express");
var app = express();

app.get(
	"/url", (req, res, next) => { res.json(["1", "Two", "III"]) }
);

app.listen(
	3002, ()=> { console.log("Server running on port 3002...") }
);