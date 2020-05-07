const mongoose = require('mongoose');
const { 
    Schema
} = mongoose;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    finish: { type: String },
    update: { type: Date }
});

module.exports = mongoose.model('Task', TaskSchema)