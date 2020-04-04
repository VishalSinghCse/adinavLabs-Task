const mongoose =require("mongoose")
const uuidv1 =require('uuid/v1');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    email:{
        type: String,
        trim:true,
        require:true
    },
    hashed_password:{
        type: String,
        require:true       
    },
    salt: String,
    created:{
        type: Date,
        default:Date.now
    },
    updated:Date
})

/**
 * virtual fields are additional fields for a given model
 * Their values can be set manually or automatically with defined functionality
 * keep in mind:virtual properties (password) don't written to the document's collection
 * They only use exit logically and not written to the document's collection
 */

 userSchema.virtual('password')
 .set(function(password){
     //create temporary variable called _password
     this._password =password
    //generate a timestamp
    this.salt =uuidv1()
    //encryptPassword()
    this.hashed_password =this.encryptedPassword(password)
 })

 .get(function() {
     return this._password
})

module.exports =mongoose.model("User",userSchema)