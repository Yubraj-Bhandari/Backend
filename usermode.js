const mongoose= require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
//27017 is the port of mongodb
 const userSchema= mongoose.Schema({
//Schema bhaneko har user ko pass k k hunxa= name,age etc


name: String,
username: String,
email: String
 })

 module.exports= mongoose.model("user", userSchema);
 //model nabanyesamma CRUD garna mildaina ra plurals banauxa i.e users
