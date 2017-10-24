
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const licenseSchema = new Schema({
   userId: Schema.Types.ObjectId,

    created: {
       type: Date,
        default: Date.now
    },
    updated: {
       type: Date
    },
    licenseData: {
       type: Buffer
    },
    installedPhoneNumber: {
       type: Number
    },
    totalUserNumber: {
       type: Number
    },
    BundleIdOrPackageName: {
       type: String
    },
    AppSecret: {
       type: String
    },
    devices: {
       type: []
    }
});


module.exports = mongoose.model('License', licenseSchema);