const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_URI } = process.env;
const MONGODB_URI = NOTES_APP_MONGODB_URI;

mongoose
	.connect(MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})

	.then((db) => console.log('Database is connected'))
	.catch((err) => console.log(err));
