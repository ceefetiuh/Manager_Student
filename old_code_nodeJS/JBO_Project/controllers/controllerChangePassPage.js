var data = require("../db");
var bcrypt = require('bcryptjs');
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
    res.locals.noti = "";
    res.locals.success = "";
    if (req.body.submit) {

        if (!validator.isLength(req.body.passCurrent, { min: 5, max: 15 })) {
            res.locals.noti += "<div class=\"text\">Mật khẩu hiện tại không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.passNew, { min: 5, max: 15 })) {
            res.locals.noti += "<div class=\"text\">Mật khẩu mới không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.passRetype, { min: 5, max: 15 })) {
            res.locals.noti += "<div class=\"text\">Mật khẩu nhập lại không hợp lệ</div>";
        }

        if (res.locals.noti.length == 0) {

            var passCurrent = await data.user.find({ mssv: res.locals.user.mssv }).then((dataFetch) => {
                return dataFetch[0].pass;
            });

            if (!bcrypt.compareSync(req.body.passCurrent, passCurrent)) {
                res.locals.noti += "<div class=\"text\">Mật khẩu hiện tại không chính xác</div>";
            }

            if (req.body.passNew != req.body.passRetype) {
                res.locals.noti += "<div class=\"text\">Nhập lại mật khẩu không trùng khớp</div>";
            }

            if (res.locals.noti.length == 0) {
                res.locals.success = "Đổi mật khẩu thành công";
                if (bcrypt.compareSync(req.body.passNew, passCurrent)) {
                    res.locals.success += ", nhưng mà mật khẩu mới giống hệt mật khẩu cũ ^^ Rảnh thế?";
                }

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(req.body.passNew, salt, async function(err, hash) {
                        await data.user.updateOne({ mssv: res.locals.user.mssv }, { pass: hash });
                    });
                });

            }
        }

    }
    return next();
}

var controllerChangePassPage = (req, res) => {
    res.status(200).render("page/viewChangePassPage", {
        title: "Đổi mật khẩu",
        user: res.locals.user,
        noti: res.locals.noti,
        success: res.locals.success
    });
}

module.exports.checkLogin = checkLogin;
module.exports.User = User;
module.exports.Handle = Handle;
module.exports.controllerChangePassPage = controllerChangePassPage;