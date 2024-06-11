import { useState } from 'react';
import './TransferPage.css';
import {useNavigate, useLocation } from 'react-router-dom';

function TransferPage() {
    const [account, setAccount] = useState('Checking');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const handleAccountChange = (e) => {
        setAccount(e.target.value);
    }

    const handleAmountChange = (e) => {
        const value = e.target.value;
       
        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setAmount(value);
        }
    };


    const handleTransfer = () => {
        // Function to update balance
        // if (updateBalance) {
        //     updateBalance(+amount);
        // }
        navigate('/');

    };

    const handleCancel = () => {

    };

    return (
        <div className='transferpage-container'>
            <h1>Make a Transfer</h1>
            <div className='transferpage-content'>
                <p>To:</p>
                <select id='dropdown'
                value={account}
                onChange={handleAccountChange}>
                    <option value='Checking'>Checking</option>
                    <option value='Savings'>Savings</option>
                </select>
                <p>Amount:</p>
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                />
            </div>
            <div>
            <button onClick={handleTransfer}>Confirm</button>
                <button onClick={() =>navigate('/')}>Cancel</button>
            </div>
        </div>
    );
}
  
  export default TransferPage;