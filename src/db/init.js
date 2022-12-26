const mongoose = require( 'mongoose' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'runValidators', true );
mongoose.set('strictQuery', false);

require('../models/Users'); 
require('../models/problems'); //problems

const {
    DB_HOST,
    DB_PORT,
    DB_NAME ,
    DB_USER ,
    DB_PASSWORD
} = process.env;

const connectionString = `mongodb+srv://leedcodedb:${DB_PASSWORD}@cluster0.6ieinzc.mongodb.net/?retryWrites=true&w=majority`         //`mongodb://${DB_HOST}/${DB_NAME}`
const connect = async () => {
    try {
        await mongoose.connect( connectionString ); //mongodb://localhost:27017
        console.log( 'conncted to the db' );
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};

module.exports = {
    connect
};