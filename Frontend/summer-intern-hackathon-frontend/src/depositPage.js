import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DepositPage = () => {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAccount, setSelectedAccount] = useState("Checking"); // Default to checking account

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
      console.log(amount);
    }
  };

  const handleDeposit = () => {
    const id = localStorage.getItem("id");
    const updatedBalance = {
      amount: amount,
      balance_type: selectedAccount,
    };
    fetch(`http://localhost:8080/accounts/${id}/deposit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBalance),
    });
    navigate("/home");
  };

  return (
    <div className="transferpage-background">
      <div className="transferpage-container">
        <h1>Make a Deposit</h1>
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
          <button onClick={handleDeposit}>Confirm</button>
          <button onClick={() => navigate("/home")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
