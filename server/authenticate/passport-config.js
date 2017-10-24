/**
 * Created by zhangxu on 13/10/2017.
 */

const passport = require('passport');
const localStrategy = require('passport-local');

//这里引入的是一个操作数据库的User 工具函数
const User = require('../model/User');



const mongoose = require('mongoose');
// const User = mongoose.model('User');


//本地验证默认是通过用户名个密码验证的
//passport.use 的第一个参数是一个字符串， 是用来识别验证方法的， 因为一个工程中， 可能会有多次验证， 每次验证的逻辑会不一样。
//实例化的第一个参数是一个对象， 在对象里添加要验证的字段。
passport.use('local.signUp',new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        // _passReqToCallback: true   //默认是FALSE， 设置为TRUE时， 可以将整个req传递给回调函数，这样回调里就可以验证req中带的所有条件了。
    }, function (email, password, done) {
        console.log('email = ' + email);
        console.log('password = ' + password);

        //在数据库中查找Email，发生错误返回错误
        //1、如果查询到，则返回错误，说明该邮箱已经被注册
        //2、如果未查询到，则新建一个User,并保存到数据库中，并返回User
        User.findOne({'email': email}, function (error, user) {
            console.log('error = ' + JSON.stringify(error));
            console.log('user = ' + JSON.stringify(user));
            if (error) {
                done(error);
            }
            if (user) {
                done(null, false, {message: '此邮件已经被注册'})
            }

            var newUser = new User();
            newUser.email = email;
            newUser.password = password;
            
            newUser.save(function (error, result) {
                if (error) {
                    done(error, false, {message: '用户保存失败'})
                } else {
                    done(null, result);
                    console.log("result = " + result);
                }

            })

        })


}));

passport.use('local.signIn',new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        // _passReqToCallback: true   //默认是FALSE， 设置为TRUE时， 可以将整个req传递给回调函数，这样回调里就可以验证req中带的所有条件了。
    }, function (email, password, done) {
        console.log('email = ' + email);
        console.log('password = ' + password);

        //1、如果在数据库中没有找到这个email，返回错误
        //2、如果有这个email，但是对应的password错误，返回错误
        //3、都能对应上，则返回user
        User.findOne({'email':email}, function (error, user) {
            console.log('error = ' + JSON.stringify(error));
            console.log('user = ' + JSON.stringify(user));
            console.log('user.password = ' + JSON.stringify(user.password));
            console.log('user.password = password ?' + user.password === password);
            if (error) {
                done(error);
            }
            if (!user || !(user.password === password)) {
                done(null, false, {message: 'Invalid username or password'})
            } else {
                done(null, user);
            }

        })

    }));


// serializeUser 在用户登录验证成功后，将会把用户的数据储存到 session 中
// 在这里保存到 session 中的是用户的 username 。
//在这里的 user 应为我们之前在 new localStrategy(function() {.....})中传递的回调函数 done
//的参数 user 对象（从数据库中获取到的）

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


// deserializeUser 在每次请求的时候将会根据用户名读取 从 session 中读取用户的全部数据
// 的对象，并将其封装到 req.user
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    })
});




module.exports = passport;

