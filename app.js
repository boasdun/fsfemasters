const http = require('http');

http.createServer(function(req, res) {
	res.write("Update vanaf hierrr!");
	res.end();
	}
).listen(3000);

console.log("Server started 2");
