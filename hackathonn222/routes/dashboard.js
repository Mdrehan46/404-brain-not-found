const router = require('express').Router();
const Dashboard = require('../models/Dashboard');

// Get all dashboard data
router.get('/', async (req, res) => {
    try {
        const dashboards = await Dashboard.find();
        res.json(dashboards);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add new dashboard
router.post('/add', async (req, res) => {
    try {
        const newDashboard = new Dashboard({
            title: req.body.title,
            metrics: req.body.metrics
        });

        const savedDashboard = await newDashboard.save();
        res.json(savedDashboard);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Update dashboard
router.put('/update/:id', async (req, res) => {
    try {
        const dashboard = await Dashboard.findById(req.params.id);
        if (dashboard) {
            dashboard.title = req.body.title;
            dashboard.metrics = req.body.metrics;
            
            const updatedDashboard = await dashboard.save();
            res.json(updatedDashboard);
        } else {
            res.status(404).json('Dashboard not found');
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Delete dashboard
router.delete('/:id', async (req, res) => {
    try {
        await Dashboard.findByIdAndDelete(req.params.id);
        res.json('Dashboard deleted successfully');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;