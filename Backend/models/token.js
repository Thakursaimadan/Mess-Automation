const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    isUsed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Token', tokenSchema);
