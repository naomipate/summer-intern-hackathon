import { useState } from 'react';
import './Homepage.css';

function Homepage() {
    const [name, setName] = useState("Jane");
    const [checkingBalance, setCheckingBalance] = useState(1000);
    const [savingsBalance, setSavingsBalance] = useState(1500);

    const handleDeposit = () => {
        //navigation
    }

    const handleWithdraw = () => {
        //navigation
    }

    const handleTransfer = () => {
        //navigation
    }

    return (
        <div className='main-container'>
            <h1>Welcome, {name}!</h1>
            <div className='balance-container'>
                <div className='balance-background'>
                    <p>Checking Balance: ${checkingBalance}</p>
                </div>
                <div className='balance-background'>
                    <p>Savings Balance: ${savingsBalance}</p>
                </div>
            </div>
            <h2>What would you like to do today?</h2>
            <div className='button-group'>
                <button className='button' onClick={handleDeposit}>Deposit</button>
                <button className='button' onClick={handleWithdraw}>Withdraw</button>
                <button className='button' onClick={handleTransfer}>Transfer</button>
            </div>
        </div>
    );
  }
  
  export default Homepage;