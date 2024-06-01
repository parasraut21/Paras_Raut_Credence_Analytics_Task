const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const dotenv = require('dotenv');

dotenv.config();

const db = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const seedData = require('./data/seedData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

db.connect();

app.use('/api/books', bookRoutes);

app.listen(PORT, async () => {
    try {
        console.log(`Server is running on port ${PORT}`);
        await seedData();
    } catch (error) {
        console.error('Error seeding data:', error.message);
    }
});
