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
        <div className='transferpage-background'>
            <div className='transferpage-container'>
                <h1>Make a Deposit</h1>
                <div className='transferpage-content'>
                    <p>Select Account:&ensp;</p>
                    <select value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </div>
                <div className='transferpage-content'>
                    <p>Amount:&ensp;$</p>
                    <input
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                    />
                </div>
                <div className='transferpage-button'>
                    <button onClick={handleDeposit}>Confirm</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DepositPage;
