import { useEffect, useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
function Homepage() {
    const [name, setName] = useState("Jane");
    const [checkingBalance, setCheckingBalance] = useState(1000);
    const [savingsBalance, setSavingsBalance] = useState(1500);
    const [selectedAccount, setSelectedAccount] = useState('checking'); // Default to checking account
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('put api url here');
                const data = await response.json();
                //do something with the data
            } catch (error) {
                console.error('Error: ', error)
            }
        };
        fetchData();
    }, []);

    const handleDeposit = () => {
        navigate('/deposit', { state: { accountType: selectedAccount}});

    }

    const handleWithdraw = () => {
        navigate('/withdraw', { state: { accountType: selectedAccount} });
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