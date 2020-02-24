const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));

//Setup environment variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Using nodemon : Server is running on port " + port );
});