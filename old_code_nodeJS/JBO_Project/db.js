const db = require("mongoose");

db.connect(process.env.URL_DB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


const userSchema = new db.Schema({
    mssv: {
        type: String,
        require: true,
        unique: true
    },
    pass: {
        type: String,
        require: true
    },
    hoten: {
        type: String,
        require: true
    },

    sdt: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    facebook: {
        type: String,
        require: true,
        unique: true
    },
    lop: {
        type: String,
        require: true
    },
    ngaysinh: {
        type: String,
        require: true
    },
    chucvu: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    joindate: {
        type: String,
        require: true
    }
});

const user = db.model("users", userSchema);


module.exports.user = user;