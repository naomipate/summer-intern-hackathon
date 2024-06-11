import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const WithdrawPage = () => {
    const [amount, setAmount] = useState(0);
    const history = useHistory();
    const location = useLocation();
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
        history.push('/');
    };

    return (
        <div>
            <h1>Make a Withdrawal</h1>
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
                <button onClick={handleWithdraw}>Confirm</button>
                <button onClick={() => history.push('/')}>Cancel</button>
            </div>
        </div>
    );
};

export default WithdrawPage;
