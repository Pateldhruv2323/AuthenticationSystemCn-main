const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/auth_db');


mongoose.connect('mongodb://localhost:27017');


//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the database");
});