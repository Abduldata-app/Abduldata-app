import React from 'react';
import './App.css';

function App() {
  const handleBuyAirtime = () => {
    alert('Airtime purchase feature is under development.');
  };

  const handleBuyData = () => {
    alert('Data purchase feature is under development.');
  };

  const handleReferral = () => {
    alert('Referral system feature is under development.');
  };

  const handleWithdraw = () => {
    alert('Withdrawal feature is under development.');
  };

  return (
    <div>
      <h1>AbdulData Dashboard</h1>
      <button onClick={handleBuyAirtime}>Buy Airtime</button>
      <button onClick={handleBuyData}>Buy Data</button>
      <button onClick={handleReferral}>Referral System</button>
      <button onClick={handleWithdraw}>Withdraw Commission</button>
    </div>
  );
}

export default App;
