import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DepositPage = () => {
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAccount, setSelectedAccount] = useState('checking'); // Default to checking account

    const { accountType, updateBalance } = location.state || {};

    const handleAmountChange = (e) => {
        const value = e.target.value;
       
        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setAmount(value);
        }
    };


    const handleDeposit = () => {
        //function of bank account/homepage
        if (updateBalance) {
            updateBalance(+amount);
        }
        navigate('/');
    };

    return (
        <div>
            <h1>Make a Deposit</h1>
            <div>
                <label>
                    Select Account:
                    <select value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                    />
                </label>
                
            </div>
            <div>
                <button onClick={handleDeposit}>Confirm</button>
                <button onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
};

export default DepositPage;
