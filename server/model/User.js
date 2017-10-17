/**
 * Created by zhangxu on 13/10/2017.
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
});

userSchema.methods.findUniqueUserByEmail = function(email, callback) {
    return this.model('User').find({email: email}, callback);
};

userSchema.statics.signIn


module.exports =  mongoose.model('User', userSchema);