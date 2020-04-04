const monngose =require('mongoose')

const postSchema =new monngose.Schema({
    title:{
        type:String,
        required:"This is required",
        minlength:4,
        maxlength:150
    }, 
    body:{
        type:String,
        required:"Body is required",
        minlength=4,
        maxlength:2000
    }

});

module.exports =monngose.mode("Post",postSchema);