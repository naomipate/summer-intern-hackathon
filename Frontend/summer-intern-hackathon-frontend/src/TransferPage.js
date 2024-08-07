import { useState } from "react";
import "./TransferPage.css";
import { useNavigate, useLocation } from "react-router-dom";

function TransferPage() {
  const [account, setAccount] = useState("Checking");
  const [receivingAccount, setReceivingAccount] = useState("Savings");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
    if (e.target.value === "Checking") {
      setReceivingAccount("Savings");
    } else {
      setReceivingAccount("Checking");
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleTransfer = async () => {
    const id = localStorage.getItem("id");
    const updatedBalance = {
      id: Number(id),
      amount: Number(amount),
      balance_type: account,
    };
    try {
      const response = await fetch(
        `http://localhost:8080/accounts/${id}/transfer`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBalance),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    navigate("/home");
  };

  const handleCancel = () => {};

  return (
    <div className="transferpage-background">
      <div className="transferpage-container">
        <h1>Make a Transfer</h1>
        <div className="transferpage-content">
          <p>From:&ensp;</p>
          <select id="dropdown" value={account} onChange={handleAccountChange}>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <div className="transferpage-content">
          <p>To:&ensp;{receivingAccount}</p>
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
          <button onClick={handleTransfer}>Confirm</button>
          <button onClick={() => navigate("/home")}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default TransferPage;
