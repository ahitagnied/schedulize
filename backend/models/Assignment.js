const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  assignment: { type: String, required: true },
  dueDate: { type: Date, required: true },
  estimatedTime: { type: Number, required: true },
  actualTime: { type: Number, default: null },
  assignmentType: { type: String, required: true }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
