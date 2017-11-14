/**
 * Created by zhangxu on 2017/10/24.
 */

const express = require('express');

const router = express.Router();

const License = require('../model/License');

const User = require('../model/User');


//新建License
router.put('/', function (req, res, next) {
    console.log('licenseService');
    console.log('req = ' + req.body.userId);
    console.log('req = ' + req.body.license.licenseType);
    console.log('req = ' + req.body.license.expired_ts);
    console.log('req = ' + req.body.license.devices);

    //通过userId在User表中找到对应的User, 失败返回450
    User.findById(req.body.userId, function (error, user) {
        if (error) {
            return res.status(450).send({
                message: JSON.stringify(error)
            })
        }

        //新建一个license，并保存
        if (user) {
            const license = new License();
            license.userId = user._id;
            license.licenseType = req.body.license.licenseType;
            license.expired_ts = req.body.license.expired_ts;
            license.devices = req.body.license.devices;

            //保存license，失败返回451
            license.save(function (error) {
                if (error) {
                    return res.status(451).send({
                        message: JSON.stringify(error)
                    });
                }

                //保存成功后，返回所有License
                License.find({userId: user._id}, function (error, licenseAll) {
                    if (error) {
                        return res.status(450).send({
                            message: JSON.stringify(error)
                        });
                    }
                    res.json({result: 'Add license successfully.', licenses: licenseAll})
                })
            })
        }
    })

});


//更新License
router.post('/:licenseId', function (req, res) {
    console.log('licenseService');
    console.log('licenseId = ' + req.params.licenseId);
    console.log('req = ' + req.body.userId);
    console.log('req = ' + JSON.stringify(req.body.license.devices));
    console.log('req = ' + req.body.license.expired_ts);

    //通过userId在User表中找到对应的User, 失败返回450
    User.findById(req.body.userId, function (error, user) {
        if (error) {
            return res.status(450).send({
                message: JSON.stringify(error)
            })
        }

        //在License表中查找对应的license，失败返回450
        if (user) {
            License.findById(req.params.licenseId, function (error, license) {
                if (error) {
                    return res.status(450).send({
                        message: JSON.stringify(error)
                    })
                }
                //更新返回的license字段
                if (license) {
                    license.expired_ts = req.body.license.expired_ts;
                    license.devices = req.body.license.devices;
                    //保存，失败返回451
                    license.save(function (error, license) {
                        if (error) {
                            return res.status(451).send({
                                message: JSON.stringify(error)
                            })
                        }

                        //保存成功后，返回所有License
                        License.find({userId:user._id}, function (error, licenseAll) {
                            if (error) {
                                return res.status(451).send({
                                    message: JSON.stringify(error)
                                })
                            }

                            res.json({result: 'Update license successfully.', licenses: licenseAll})
                        })
                    })
                }
            });
        }
    })
});


router.delete('/', function (req, res) {
    console.log('licenseService-deleteLicense');

    console.log('req.body.licenseId = ' + req.body.licenseId);

    License.findById(req.body.licenseId, function (error, license) {
        if (error) {
            res.status(450).send({
                message: JSON.stringify(error)
            })
        }

        if (license) {
            License.remove({_id: license._id}, function (error, result) {
                if(error) {
                    res.status(452).send({
                        message: JSON.stringify(error)
                    })
                }
                console.log('license = ' + JSON.stringify(result));

                License.find({userId: license.userId}, function (error, licenseAll) {
                    if(error) {
                        res.status(450).send({
                            message: JSON.stringify(error)
                        })
                    }
                    res.json({result: 'Update license successfully.', licenses: licenseAll});
                })
            })
        }
    })

});


module.exports = router;