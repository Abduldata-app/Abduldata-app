// private/controllers/payment.js

const axios = require('axios');

exports.buyAirtime = async (req, res) => {
  const { network, amount, phone } = req.body;

  try {
    // Make request to Paystack (or your VTU provider) for airtime purchase
    const response = await axios.post(
      'https://api.paystack.co/airtime', // Replace with your VTU API endpoint
      {
        network,
        amount,
        phone,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Airtime purchase response:', response.data);
    res.status(200).json({
      success: true,
      message: 'Airtime purchased successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('Airtime purchase error:', error.response ? error.response.data : error.message);
    res.status(500).json({
      success: false,
      message: 'Airtime purchase failed',
      error: error.response ? error.response.data : error.message,
    });
  }
};
