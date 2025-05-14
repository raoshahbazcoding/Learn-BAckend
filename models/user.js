const mongoose = require('mongoose')


//  Create User Schema

const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    password:String,
    // age:Number,
    // gender:{
    //     type:String,
    //     enum: ['male','female']
    // }
})

// for implemting in databse
const userModel = mongoose.model('user',userSchema)


// export for Use this Schemsa Another Files


module.exports = userModel