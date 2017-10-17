/**
 * Created by zhangxu on 13/10/2017.
 */

const passport = require('passport');
const localStrategy = require('passport-local');

//这里引入的是一个操作数据库的User 工具函数
// const User = require('../model/User');


//本地验证默认是通过用户名个密码验证的
//passport.use 的第一个参数是一个字符串， 是用来识别验证方法的， 因为一个工程中， 可能会有多次验证， 每次验证的逻辑会不一样。
//实例化的第一个参数是一个对象， 在对象里添加要验证的字段。
passport.use('local.signUp',new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        // _passReqToCallback: true   //默认是FALSE， 设置为TRUE时， 可以将整个req传递给回调函数，这样回调里就可以验证req中带的所有条件了。
    }, function (email, password, done) {

        //在编写User.findUniqueUserByUserName时， 包含两个参数， 一个是username
        //一个是我们现在传入的回调函数， 我们将获取到的用户信息传递给我们的回调函数
        var user = new User();
        user.findUniqueUserByEmail(email, function (err, user) {
            if (err) {
                console.log('出现错误');
                return done(err);
            }

            if (!user) {
                console.log('没有找到对应的用户名.');

                return done(null, false, {message: '没有找到对应的用户名.'});
            }

            if (user.password != password) {
                console.log('密码匹配有误.');

                return done(null, false, {message: '密码匹配有误.'});
            }

            return done(null, user);
        })
}));

passport.use('local.signIn',new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        // _passReqToCallback: true   //默认是FALSE， 设置为TRUE时， 可以将整个req传递给回调函数，这样回调里就可以验证req中带的所有条件了。
    }, function (email, password, done) {

        //在编写User.findUniqueUserByUserName时， 包含两个参数， 一个是username
        //一个是我们现在传入的回调函数， 我们将获取到的用户信息传递给我们的回调函数
        var user = new User();
        user.findUniqueUserByEmail(email, function (err, user) {
            if (err) {
                console.log('出现错误');
                return done(err);
            }

            if (!user) {
                console.log('没有找到对应的用户名.');

                return done(null, false, {message: '没有找到对应的用户名.'});
            }

            if (user.password != password) {
                console.log('密码匹配有误.');

                return done(null, false, {message: '密码匹配有误.'});
            }

            return done(null, user);
        })
    }));


// serializeUser 在用户登录验证成功后，将会把用户的数据储存到 session 中
// 在这里保存到 session 中的是用户的 username 。
//在这里的 user 应为我们之前在 new localStrategy(function() {.....})中传递的回调函数 done
//的参数 user 对象（从数据库中获取到的）

passport.serializeUser(function (user, done) {
    done(null, user.email);
});


// deserializeUser 在每次请求的时候将会根据用户名读取 从 session 中读取用户的全部数据
// 的对象，并将其封装到 req.user
passport.deserializeUser(function (id, done) {
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // })
});

module.exports = passport;

