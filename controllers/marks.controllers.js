
const db = require('../models/index');
const { Op } = require("sequelize");// operator and and or 
const marks = db.marks;
module.exports = {
    Add: (req, res) => {  //  add Subject and its marks obtained by student with student Id
        let mark = {
            Sub_Name: req.body.Sub_Name,
            Marks: req.body.Marks,
            studentRollNo:req.body.studentRollNo
        }
        marks.create(mark).then((data) => {
            res.send({ error: false, message: 'New Subject and Marks added' })
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        marks.update({
            Sub_Name: req.body.Sub_Name,
            Marks: req.body.Marks
        }, { where: { ID: id } }).then((data) => {
            res.send({ error: false, message: 'subject and marks Updated' })
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    }
}