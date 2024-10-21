const express = require('express');
const router = express.Router();
const student = require('../controllers/studentController');

router.post('/', student.createStudent);
router.get('/', student.getAllStudents);
router.get('/:id', student.getStudentById);
router.put('/:id', student.updateStudent);
router.delete('/:id', student.deleteStudent);

module.exports = router;