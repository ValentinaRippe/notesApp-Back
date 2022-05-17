const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';

const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect(URI, connectionOptions);

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Db is connected')
})