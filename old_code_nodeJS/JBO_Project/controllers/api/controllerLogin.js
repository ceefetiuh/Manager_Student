'use strict';
var data = require("../../db");
var bcrypt = require('bcryptjs');

module.exports = {
    handle: (req, res, next) => {
        try {
            let { mssv, pass } = req.body;
            if (!mssv && !pass) {
                throw 'Error input MSSV or Pass';
                return;
            }

        } catch (err) {

        }
    },
    controllerLogin: (req, res) => {
        res.status(200).json({
            'name1': 'Gia Boi',
            'name2': [{
                    'firtName': 'Nguyen',
                    'lastName': 'Phuoc Nguyen'
                },
                {
                    'firtName': 'Huynh',
                    'lastName': 'Gia Boi'
                }
            ]
        });
    }
}