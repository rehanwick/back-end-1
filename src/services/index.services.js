const mongoose = require('mongoose') ; 

const User = mongoose.model('Users') ; 

const getIndex = () => {
    return User.find() ; 
}

const getUser = (email) => {
    return User.findOne( {
        email : `${email}`
    }) ; 
}

module.exports = {
    getIndex , 
    getUser
}