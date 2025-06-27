// private/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();
app.use(express.json());

// Import routes
const verificationRoutes = require('./routes/verification');
const airtimeRoutes = require('./routes/airtime'); // ✨ Add this line

// Use routes
app.use('/api/verify', verificationRoutes);
app.use('/api/airtime', airtimeRoutes); // ✨ Add this line

app.get('/', (req, res) => {
  res.send('AbdulData Backend Server Running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});