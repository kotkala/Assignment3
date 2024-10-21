const Student = require('../models/Students');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Student code must be unique"
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong on the server"
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }
    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong on the server"
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }
    res.json({
      success: true,
      message: "Student updated successfully",
      data: student
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Student code must be unique"
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }
    res.json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong on the server"
    });
  }
};