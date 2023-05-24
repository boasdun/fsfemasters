const http = require('http');

http.createServer(function(req, res) {
	res.write("Update vanaf daar!");
	res.end();
	}
).listen(3000);

console.log("Server started 2");
