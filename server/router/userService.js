/**
 * Created by zhangxu on 2017/7/17.
 */
const express = require('express');

const router = express.Router();


const passport = require('passport');

const License = require('../model/License');

// router.get('/*', function (req, res) {
//     console.info("req.user = " + req.user);
// });




router.post('/signUp', function (req, res, next) {
    console.log('local.signUp');
    passport.authenticate('local.signUp', function (error, user, info) {
        console.log('error = ' + JSON.stringify(error));
        console.log('user = ' + JSON.stringify(user));
        console.log('info = ' + JSON.stringify(info));
        if (error) {
            res.status(404).send(error);
        }
        if (!user) {
            res.status(404).send(info);
        } else {
            req.logIn(user, function (error) {
                if (error) {
                    res.status(400).send(error);
                } else {

                    res.json(generateUser(user, []));
                }
            })
        }


    })(req, res, next)
});

router.post('/signIn',function (req, res, next) {
        passport.authenticate('local.signIn',function (error, user, info) {
            console.log('error = ' + JSON.stringify(error));
            console.log('user = ' + JSON.stringify(user));
            console.log('info = ' + JSON.stringify(info));
            if (error) {
                res.status(999).send(info);
            }
            if (!user) {
                res.status(404).send(info);
            } else {
                req.logIn(user, function (error) {
                    if (error) {
                        res.json(error);
                    } else {
                        License.find({userId: user._id}, function (error, licenseAll) {
                            if (error) {
                                console.log("err = " + JSON.stringify(err));
                                res.status(422).send({
                                    message: JSON.stringify(error)
                                })
                            } else {
                                res.json(generateUser(user, licenseAll));
                            }
                        })

                    }
                })
            }

        })(req, res, next)
});


router.get('/signOut', function (req, res) {
    console.info('登出');
    console.info('/api/auth/signout————————--req.user = ' + JSON.stringify(req.user));
    req.logout();
    res.json(req.user);
    console.info('/api/auth/signout——————req.user = ' + JSON.stringify(req.user));

});


function generateUser(_user, licenses) {

    let user_cb = {
        _id: _user._id,
        created: _user.created.toString(),
        roles: _user.roles,
        email: _user.email,
        licenseType: _user.licenseType
    };

    return {
        user:user_cb,
        licenses: licenses
    }

    // return {
    //     _id: user._id,
    //     created: user.created.toString(),
    //     roles: user.roles,
    //     email: user.email,
    //     licenses: licenses,
    //     licenseType: user.licenseType
    // }
}


module.exports = router;