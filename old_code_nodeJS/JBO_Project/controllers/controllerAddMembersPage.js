var data = require('../db');
var validator = require('validator');
var bcrypt = require('bcryptjs');

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

var Validation = async(req, res, next) => {
    res.locals.noti = "";
    res.locals.success = "";
    if (req.body.submit) {
        if (!validator.isNumeric(req.body.mssv) || !validator.isLength(req.body.mssv, { min: 8, max: 8 })) {
            res.locals.noti += "<div class=\"text\">MSSV không hợp lệ </div>";
        }

        if (!validator.isLength(req.body.hoten, { min: 10 })) {
            res.locals.noti += "<div class=\"text\">Họ và tên không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.lop, { min: 5 })) {
            res.locals.noti += "<div class=\"text\">Lớp không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.ngaysinh, { min: 5 })) {
            res.locals.noti += "<div class=\"text\">Ngày sinh không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.joindate, { min: 5 })) {
            res.locals.noti += "<div class=\"text\">Ngày tham không hợp lệ</div>";
        }

        if (!validator.isNumeric(req.body.level) || !validator.isLength(req.body.level, { min: 1, max: 1 }) || (req.body.level != "0" && req.body.level != "1" && req.body.level != "2" && req.body.level != "3")) {
            res.locals.noti += "<div class=\"text\">Cấp độ không hợp lệ</div>";
        }

        if (!validator.isNumeric(req.body.chucvu) || !validator.isLength(req.body.chucvu, { min: 1, max: 2 }) || (req.body.chucvu != "0" && req.body.chucvu != "1" && req.body.chucvu != "2" && req.body.chucvu != "3")) {
            res.locals.noti += "<div class=\"text\">Chức vụ không hợp lệ</div>";
        }

        if (!validator.isNumeric(req.body.sdt) || !validator.isLength(req.body.level, { min: 1, max: 1 })) {
            res.locals.noti += "<div class=\"text\">Cấp độ không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.email, { min: 5 })) {
            res.locals.noti += "<div class=\"text\">Email không hợp lệ</div>";
        }

        if (!validator.isLength(req.body.facebook, { min: 5 })) {
            res.locals.noti += "<div class=\"text\">Facebook không hợp lệ</div>";
        }


        await data.user.find({ mssv: req.body.mssv }).then((dataFetch) => {
            if (dataFetch.length != 0) {
                res.locals.noti += "<div class=\"text\">Thành viên đã tồn tại trên hệ thống</div>";
            }
        });

        await data.user.find({ sdt: req.body.sdt }).then((dataFetch) => {
            if (dataFetch.length != 0) {
                res.locals.noti += "<div class=\"text\">SĐT đã tồn tại trên hệ thống</div>";
            }
        });

        await data.user.find({ email: req.body.email }).then((dataFetch) => {
            if (dataFetch.length != 0) {
                res.locals.noti += "<div class=\"text\">Email đã tồn tại trên hệ thống</div>";
            }
        });

        await data.user.find({ facebook: req.body.facebook }).then((dataFetch) => {
            if (dataFetch.length != 0) {
                res.locals.noti += "<div class=\"text\">Facebook đã tồn tại trên hệ thống</div>";
            }
        });


        if (res.locals.noti.length == 0) {
            res.locals.success = "Thêm thành công user có MSSV là " + req.body.mssv;
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash("12345", salt, function(err, hash) {
                    data.user.create({
                        mssv: req.body.mssv,
                        pass: hash,
                        hoten: req.body.hoten,
                        sdt: req.body.sdt,
                        email: req.body.email,
                        facebook: req.body.facebook,
                        lop: req.body.lop,
                        ngaysinh: req.body.ngaysinh,
                        chucvu: req.body.chucvu,
                        level: req.body.level,
                        joindate: req.body.joindate
                    });
                });
            });
        }
    }
    return next();
}

var controllerAddMembersPage = (req, res) => {
    res.status(200).render('page/viewAddMembersPage', {
        title: "Thêm thành viên",
        noti: res.locals.noti,
        user: res.locals.user,
        success: res.locals.success
    });
}

module.exports.checkLogin = checkLogin;
module.exports.User = User;
module.exports.Validation = Validation;
module.exports.controllerAddMembersPage = controllerAddMembersPage;