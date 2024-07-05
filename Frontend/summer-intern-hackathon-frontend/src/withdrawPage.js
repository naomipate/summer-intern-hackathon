import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WithdrawPage = () => {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAccount, setSelectedAccount] = useState("checking"); // Default to checking account
  const { accountType, updateBalance } = location.state || {};

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleWithdraw = () => {
    // Function to update balance
    if (updateBalance) {
      updateBalance(-amount); // Withdrawal is a negative amount
    }
    navigate("/home");
  };

  return (
    <div className="transferpage-background">
      <div className="transferpage-container">
        <h1>Make a Withdrawal</h1>
        <div className="transferpage-content">
          <p>Select Account:&ensp;</p>
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
          >
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <div className="transferpage-content">
          <p>Amount:&ensp;$</p>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
          />
        </div>
        <div className="transferpage-button">
          <button onClick={handleWithdraw}>Confirm</button>
          <button onClick={() => navigate("/home")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
