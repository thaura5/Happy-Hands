var mongoose = require('mongoose');
//schema to our host details
var hostSchema = mongoose.Schema({
firstName:{type:String},
lastName:{type:String},
email:{type:String},
cname:{type:String},
add1:{type:String},
number:{type:Number},
cou: {type:String},
city:{type:String},
fdate:{type:Date},
udate: {type:Date},
dis: {type:String},
zip:{type:String},
carId:{type:String}

});


module.exports = mongoose.model('host', hostSchema);
