var mongoose = require('mongoose');
Schema = mongoose.Schema; //Defining book schema
var ProductSchema = new Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:100,
        required:true,
        unique:true
    },
    description:{
        type:String,
        minlength:5,
        maxlength:100,
        required:true,
    },
    price:{
        type:Number,
        min:0,
        required:true,
    }
});
ProductSchema.index({name: 'text', description: 'text'});
mongoose.model('Product', ProductSchema); //Creating book model