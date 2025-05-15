const mongoose = require('mongoose')


//  Create User Schema

const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    password:String,
    role: {
    type: String,
    enum: ['staff', 'manager'],  // make sure enum matches possible values
    required: true
  }
})

// for implemting in databse
const userModel = mongoose.model('user',userSchema)


// export for Use this Schemsa Another Files


module.exports = userModel