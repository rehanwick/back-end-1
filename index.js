
require( 'dotenv' ).config();
const path = require('path') ; 
const os = require('os');
const express = require('express');
const { connect } = require( './src/db/init' );
const cors = require('cors') ; 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true})) ; 
app.use(cors()) ; 
app.use( express.json() );

app.use(express.static(path.join(process.cwd() , 'public'))) ; 

app.use('/auth' , require('./src/routes/auth.routes'));
app.use('/' , require('./src/routes/index.routes') ) ; 
app.use('/problems' , require('./src/routes/problems.routers') );

app.use( require( './src/middlewear/errors' ).resourceNotFound );
app.use( require( './src/middlewear/errors' ).errorHandler );

app.use(function (req ,res , next){
    res.sendFile(path.join(process.cwd(), 'public' , 'index.html')) ; 
})

connect()
    .then(() => {
        app.listen( PORT, () => {
            console.log( `server started on - http://localhost:${PORT}` );
            console.log(os.platform());
        });
    })
    .catch(error => {
        process.exit( 1 );
    });