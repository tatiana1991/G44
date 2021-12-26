const mongoose =require('mongoose');

const psSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
        unique: false,    
    },
    evaluation: {
        type: String,
        required: false,
        unique: false,
    },

})

var psdata=mongoose.model('psdata',psSchema);
module.exports= psdata;
