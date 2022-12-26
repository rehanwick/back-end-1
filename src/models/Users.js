const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    name: {
        type : String , 
        required : true 
    } ,
    email: {
        type: String , 
        required : true 
    },
    password :{
        type: String , 
        required: true 
    }, 
    questions: [

    ] , 
    score: {
        easy : {
            type:Number , 
            default: 0 
        } ,
        medium : {
            type:Number , 
            default: 0 
        }, 
        heard : {
            type:Number , 
            default : 0 
        }
    }
}); 

mongoose.model( 'Users', UserSchema );