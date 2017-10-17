/**
 * Created by zhangxu on 2017/7/17.
 */
const express = require('express');

const router = express.Router();


const passport = require('passport');


/**
 * 登录
 */

// router.post('signIn', function (req, res) {
//     console.log(req.body);
//     res.json({
//         email: req.body.email,
//         password: req.body.password
//     })
// });



router.post('/api/auth/signin',function (req, res, next) {
        passport.authenticate('local.signIn',function (error, user, info) {
            if (error) {
                res.status(999).send(info);
            }
            if (!user) {
                res.redirect('/');
            }

            req.logIn(user, function (error) {
                if (error) {
                    res.json(error);
                }
                res.json(user);
            })
        })(req, res, next)
});

module.exports = router;