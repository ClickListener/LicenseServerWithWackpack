/**
 * Created by zhangxu on 2017/7/17.
 */
const express = require('express');

const router = express.Router();


/**
 * 登录
 */

router.post('/signIn', function (req, res) {
    console.log(req.body);
    res.json({
        email: req.body.email,
        password: req.body.password
    })
});

module.exports = router;