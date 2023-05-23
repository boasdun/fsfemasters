const http = require('http');

http.createServer(function(req, res) {
	res.write("Update vanaf hier 3!");
	res.end();
	}
).listen(3000);

console.log("Server started 3");
