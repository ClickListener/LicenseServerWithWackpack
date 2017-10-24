/**
 * Created by zhangxu on 13/10/2017.
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    licenseType: {
        type: String,
        default: 'new'
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user'],
        required: 'Please provide at least one role'
    },
    created: {
        type: Date,
        default: Date.now()
    }
});


module.exports =  mongoose.model('User', userSchema);