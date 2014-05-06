var express = require("express");
var path = require("path");
var config = require("config");
var app = express();

app.get("/lookup/:id", function(req, res){
	res.send("config.webPath "+ config.webPath);

});

app.configure(function(){
	app.use(express.static("web", {maxAge: 86400000}));
});

app.get("*", function(req, res){
	res.sendfile(path.join(config.webPath, "index.html"));
});

app.listen(8080);
