# Abdool Data Application

## Description

Abdool Data Application is a comprehensive web application designed to handle multiple services such as SMS verification using Twilio and payment processing using Paystack. This application allows users to verify their phone numbers and make payments online securely.

## Features

- **SMS Verification:** Uses Twilio to verify users' phone numbers via SMS.
- **Payment Gateway:** Integrates Paystack for processing payments securely.
- **User Authentication:** User registration and login for accessing services.

## Setup

### 1. Clone the Repository

To get started, first clone the repository to your local machine.

```bash
git clone https://github.com/abdooldata-app/abdool-data-application.git
cd abdool-data-application

2. Install Dependencies

Ensure you have Node.js installed. Then, run the following command to install the required dependencies.

npm install

3. Configure Environment Variables

Create a .env file in the root directory and add the following credentials for Twilio and Paystack:

TWILIO_ACCOUNT_SID=AC8a2ca4235af75173d6a804a33c4656df
TWILIO_AUTH_TOKEN=33c0e1c16cacbbe4ea988068990b5992
TWILIO_VERIFY_SID=VA33be0e09cf12d212245485efaf33395c

PAYSTACK_PUBLIC_KEY=pk_live_fefa4cab21e99bd551e0979a445038b389d9cfea
PAYSTACK_SECRET_KEY=sk_live_d376cf9690cd746cd9ffd6ab6b38cd1a03ccd642

4. Run the Application

After setting up the .env file, start the application with the following command:

npm start

The server will start running on http://localhost:3000.

Usage

1. Send SMS Verification

To send an SMS verification code, make a POST request to /send-verification with the user's phone number.

Endpoint:

POST /send-verification

Body:

{
  "phoneNumber": "+234xxxxxxxxxx"
}

2. Verify Code

To verify the code entered by the user, make a POST request to /verify-code with the phone number and the verification code.

Endpoint:

POST /verify-code

Body:

{
  "phoneNumber": "+234xxxxxxxxxx",
  "code": "123456"
}

3. Make a Payment

To initiate a payment, make a POST request to /pay with the user's email and the payment amount.

Endpoint:

POST /pay

Body:

{
  "email": "user@example.com",
  "amount": 5000
}

License

This project is licensed under the MIT License - see the LICENSE file for details.
