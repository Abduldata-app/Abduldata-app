const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const verificationRoutes = require('./controllers/verification');
const paymentRoutes = require('./controllers/payment');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/verify', verificationRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
