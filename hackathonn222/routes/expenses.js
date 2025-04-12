const router = require('express').Router();
const Expense = require('../models/Expense');

// Add new expense
router.post('/add', async (req, res) => {
    try {
        const newExpense = new Expense({
            description: req.body.description,
            amount: req.body.amount,
            paidBy: req.body.paidBy,
            group: req.body.group,
            splitBetween: req.body.splitBetween
        });
        const savedExpense = await newExpense.save();
        res.json(savedExpense);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Settle up expenses
router.post('/settle', async (req, res) => {
    try {
        const { groupId, payerId, receiverId, amount } = req.body;
        // Create a settlement expense
        const settlement = new Expense({
            description: 'Settlement',
            amount: amount,
            paidBy: payerId,
            group: groupId,
            splitBetween: [{
                user: receiverId,
                amount: amount
            }]
        });
        const savedSettlement = await settlement.save();
        res.json(savedSettlement);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;