/**
 * Created by zhangxu on 2017/10/24.
 */

const express = require('express');

const router = express.Router();

const License = require('../model/License');

const User = require('../model/User');



router.post('/createNewLicense', function (req, res, next) {
    console.log('licenseService');
    console.log('req = ' + req.body.userId);
    console.log('req = ' + req.body.installedPhoneNumber);
    console.log('req = ' + req.body.totalUserNumber);
    console.log('req = ' + req.body.BundleIdOrPackageName);

    User.findById(req.body.userId, function (error, user) {
        if (error) {
            return res.status(err).send({
                message: JSON.stringify(error)
            })
        }

        if (user) {
            const license = new License();
            license.userId = user._id;
            license.installedPhoneNumber = req.body.installedPhoneNumber;
            license.totalUserNumber = req.body.totalUserNumber;
            license.BundleIdOrPackageName = req.body.BundleIdOrPackageName;
            
            license.save(function (error) {
                if (error) {
                    return res.status(422).send({
                        message: JSON.stringify(error)
                    });
                }
                
                License.find({userId: user._id}, function (error, licenseAll) {
                    if (error) {
                        return res.status(422).send({
                            message: JSON.stringify(error)
                        });
                    }
                    res.json({result: 'Add license successfully.', licenses: licenseAll})
                })
            })
        }
    })

});


module.exports = router;