const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
    title: { type: String, required: true },
    metrics: {
        visitors: { type: Number, default: 0 },
        sales: { type: Number, default: 0 },
        revenue: { type: Number, default: 0 }
    },
    lastUpdated: { type: Date, default: Date.now }
}, {
    timestamps: true
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;