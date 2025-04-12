const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Add this line to define Schema

const groupSchema = new Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
    createdAt: { type: Date, default: Date.now }
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;