const express = require('express');

// define port for the application to listen on
const PORT = process.env.PORT | 9090;

// create express application
const app = express();

// GET /hello
app.get('/hello', (req, res) => {
	return res.status(200).json({
		success: true, message: 'Hello World!'
	});
});

// start application on defined port
app.listen(PORT, err => {

	if (err) {
		return console.log(err);
	}

	console.log(`Application started on port ${PORT}`);

});
