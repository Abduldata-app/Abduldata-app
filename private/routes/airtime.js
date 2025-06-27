// private/routes/airtime.js

const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');

router.post('/buy-airtime', paymentController.buyAirtime);

module.exports = router;