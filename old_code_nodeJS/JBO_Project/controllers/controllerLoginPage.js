'use strict';
var data = require("../db");
var bcrypt = require('bcryptjs');


var checkLogin = (req, res, next) => {
    if (req.session.dataUser) {
        return res.redirect('/');
    } else {
        return next();
    }
}

var authLogin = async(req, res, next) => {
    try {
        if (req.body.submit) {
            await data.user.find({ mssv: req.body.mssv })
                .then((dataFetch) => {
                    if (dataFetch.length == 0) {
                        res.locals.noti = "Không tồn tại dữ liệu thành viên!";
                        return next();
                    } else if (!bcrypt.compareSync(req.body.pass, dataFetch[0].pass)) {
                        res.locals.noti = "Mật khẩu không chính xác!";
                        return next();
                    } else {
                        req.session.dataUser = dataFetch[0].mssv;
                        return res.redirect("/");
                    }
                })
                .catch((err) => {
                    if (err) throw "Phát sinh lỗi trong quá trình xác thực!";
                });
        } else {
            return next();
        }
    } catch (err) {
        res.locals.noti = err;
        return next();
    }
}

var controllerLoginPage = (req, res) => {
    res.status(200).render("page/viewLoginPage", {
        noti: res.locals.noti
    });
}
module.exports.checkLogin = checkLogin;
module.exports.authLogin = authLogin;
module.exports.controllerLoginPage = controllerLoginPage;