var data = require("../db");

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

var controllerHomePage = (req, res) => {
    var level = "";
    var chucvu = "";
    if (res.locals.user.level == 0) {
        level = "Thành viên mới";
    } else if (res.locals.user.level == 1) {
        level = "Thành viên dự bị";
    } else if (res.locals.user.level == 2) {
        level = "Thành viên chính thức";
    } else if (res.locals.user.level == 3) {
        level = "Cựu thành viên";
    } else {
        level = "Thành viên siêu nhân";
    }

    if (res.locals.user.chucvu == 0) {
        chucvu = "Thành viên";
    } else if (res.locals.user.chucvu == 1) {
        chucvu = "Quản lý trang thiết bị";
    } else if (res.locals.user.chucvu == 2) {
        chucvu = "Quản lý thành viên";
    } else if (res.locals.user.chucvu == 3) {
        chucvu = "Quản lý đề tài";
    } else {
        chucvu = "Quản lý siêu cấp";
    }

    res.status(200).render("viewHomePage", {
        title: "Thông tin thành viên",
        user: res.locals.user,
        level: level,
        chucvu: chucvu
    });
}

module.exports.checkLogin = checkLogin;
module.exports.User = User;
module.exports.controllerHomePage = controllerHomePage;