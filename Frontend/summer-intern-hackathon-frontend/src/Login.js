import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // edit fetch to include userid from login
        const response = await fetch("http://localhost:8080/accounts");
        const accounts = await response.json();
        console.log(accounts);
        console.log(accounts[0]);
        setData(accounts);
        //do something with the data
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  const handleLogin = () => {
    let id = 0;
    //make sure the user exists in the database
    for (var i = 0; i < data.length; i++) {
      if (data[i].user_name === username) {
        id = data[i].id;
      }
    }
    console.log("id: ", id);
    localStorage.setItem("id", id);
    // if user exist, navigate to home
    navigate("/home");
    // else throw error in user not existing
  };

  return (
    <div className="transferpage-background">
      <div className="transferpage-container">
        <h1>Log In</h1>
        <div className="transferpage-content">
          <p>Username:&ensp;</p>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="transferpage-content">
          <p>Password:&ensp;</p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="transferpage-button">
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
