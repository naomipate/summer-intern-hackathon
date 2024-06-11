import logo from './logo.svg';
import './App.css';
import DepositPage from './depositPage';  
import Homepage from './Homepage';
import WithdrawPage from './withdrawPage';
import TransferPage from './TransferPage';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/"element={<Homepage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/transfer" element={<TransferPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
