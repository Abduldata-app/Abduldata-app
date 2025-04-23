# Abduldata-app

**Abduldata-app** wata cikakkiyar web application ce da ke ba masu amfani damar:
- Rijista da loda bayanai
- Tabbatar da lambar wayarsu ta hanyar SMS (Twilio)
- Biyan kudi ta amfani da Paystack
- Siyan airtime, data, biyan lantarki, da sauransu

## Live Demo
https://abdooldata.github.io/abdool-data-application/

---

## Technologies Used

- **Frontend**: HTML, CSS (Tailwind), JavaScript  
- **Backend**: Node.js, Express.js  
- **Verification**: Twilio (SMS)  
- **Payment**: Paystack

---

## How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/Abduldata-app/Abduldata-app.git
cd Abduldata-app

2. Install Backend Dependencies

cd private
npm install

3. Add Environment Variables

Create a file named .env in the private/ folder and paste the following:

TWILIO_ACCOUNT_SID=AC8a2ca4235af75173d6a804a33c4656df  
TWILIO_AUTH_TOKEN=33c0e1c16cacbbe4ea988068990b5992  
TWILIO_VERIFY_SID=VA33be0e09cf12d212245485efaf33395c  

PAYSTACK_PUBLIC_KEY=pk_live_fefa4cab21e99bd551e0979a445038b389d9cfea  
PAYSTACK_SECRET_KEY=sk_live_d376cf9690cd746cd9ffd6ab6b38cd1a03ccd642

4. Start the Backend Server

node server.js

5. Open the Frontend

Open public/index.html directly in your browser or host it using a service like GitHub Pages.


---

Folder Structure

Abduldata-app/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── private/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── controllers/
│   │   ├── verification.js
│   │   └── payment.js
│   └── services/
│       ├── twilioService.js
│       └── paystackService.js
│
├── README.md
├── .gitignore
└── LICENSE


---

Contact

Don taimako ko tambaya, tuntube ni ta:
Email: auh439@gmail.com
Phone: 07065631640


---

License

MIT License
