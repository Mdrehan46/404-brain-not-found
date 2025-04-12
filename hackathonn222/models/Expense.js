const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Add this line to define Schema

const expenseSchema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    splitBetween: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number }
    }],
    date: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;