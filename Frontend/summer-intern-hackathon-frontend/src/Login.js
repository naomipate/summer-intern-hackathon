import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        //make sure the user exists in the database
        navigate('/home');
    }

    return (
        <div className='transferpage-background'>
            <div className='transferpage-container'>
                <h1>Log In</h1>
                <div className='transferpage-content'>
                    <p>Username:&ensp;</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                        />
                </div>
                <div className='transferpage-content'>
                    <p>Password:&ensp;</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                </div>
                <div className='transferpage-button'>
                    <button onClick={handleLogin}>Log In</button>
                </div>
            </div>
        </div>
    );
}

export default Login;