const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // Add this line to serve static files

// Routes
const dashboardRouter = require('./routes/dashboard');
const groupsRouter = require('./routes/groups');
const expensesRouter = require('./routes/expenses');

app.use('/api/dashboard', dashboardRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/expenses', expensesRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});