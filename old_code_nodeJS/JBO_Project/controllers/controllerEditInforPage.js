var data = require("../db");
var validator = require('validator');

var checkLogin = (req, res, next) => {
    if (!req.session.dataUser) {
        return res.redirect('/page/login');
    } else {
        return next();
    }
}

var User = async(req, res, next) => {
    if (!req.session.dataUser) {
        return res.redirect('/page/login');
    } else {
        await data.user.find({ mssv: req.session.dataUser }).then((dataFetch) => {
            res.locals.user = dataFetch[0];
            return next();
        }).catch((err) => {
            if (err)
                return res.redirect('/page/login');
        });
    }
}

var Handle = async(req, res, next) => {

    if (req.query.userMssv) {
        //admin
    } else {
        //user
    }

    return next();
}

var controllerEditInforPage = (req, res) => {
    res.status(200).render("page/viewEditInforPage", {
        title: "Chỉnh sửa thông tin",
        user: res.locals.user,
        noti: res.locals.noti,
        success: res.locals.success
    });
}

module.exports.checkLogin = checkLogin;
module.exports.User = User;
module.exports.Handle = Handle;
module.exports.controllerEditInforPage = controllerEditInforPage;