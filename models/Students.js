const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentCode: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
}, {
    versionKey: false
  });

module.exports = mongoose.model('Student', studentSchema);