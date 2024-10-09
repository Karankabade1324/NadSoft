
const db = require('../models/index');
const { Op } = require("sequelize");// operator and and or 
const { validationResult } = require('express-validator');
const student = db.student;
module.exports = {
    getAll: (req, res) => {
        const { page = 1, limit = 10 } = req.body;
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);

        student.findAndCountAll({ attributes:['rollNo','Name'],include:{model:db.marks },limit: limitNum,  // Number of records per page
            offset: (pageNum - 1) * limitNum, }).then((data) => {
            res.send({ error: false,
                totalItems: data.count,               // Total number of users
                totalPages: Math.ceil(data.count / limitNum),  // Total number of pages
                currentPage: pageNum,
                data: data.rows })
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },
    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        } else {

            let user = {
                Name: req.body.Name,
                Mobile: req.body.Mobile,
                Email: req.body.Email,
                Password: req.body.Password
            }
            student.create(user).then((data) => {
                res.send({ error: false, message: 'student Registration done' })
            }).catch((err) => {
                res.send({ error: true, message: err.message });
            })
        }
    },

    update: (req, res) => {
        let id = req.params.id;
        student.update({
            Mobile: req.body.Mobile,
            Name: req.body.Name
        }, { where: { rollNo: id } }).then((data) => {
            res.send({ error: false, message: 'student Updated' })
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },
    find: (req, res) => {
        let id = req.params.id;
        student.findAll({include:{model:db.marks },
            where: {
                  rollNo: id
            }
        }).then((data) => {
            res.send({ error: false, data: data })
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        student.destroy({ where: { rollNo: id } }).then((data) => {
            if (data > 0) {
                res.send({ error: false, message: 'Student record deleted successfully' });
            }
            else {
                res.send({ error: false, message: 'Student Not Found with roll no ' + id });
            }
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    }
}