/**
 * Created by zhangxu on 2017/7/17.
 */
const express = require('express');

const router = express.Router();


/**
 * 登录
 */

router.post('/api/auth/signIn', function (req, res) {
    res.json({
        name: req.name,
        password: req.password
    })
});

module.exports = router;