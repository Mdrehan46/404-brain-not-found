const router = require('express').Router();
const Group = require('../models/Group');

// Create new group
router.post('/create', async (req, res) => {
    try {
        const newGroup = new Group({
            name: req.body.name,
            members: req.body.members
        });
        const savedGroup = await newGroup.save();
        res.json(savedGroup);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Get all groups for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const groups = await Group.find({
            members: req.params.userId
        }).populate('members', 'name');
        res.json(groups);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;