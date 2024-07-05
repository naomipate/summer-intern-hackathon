import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //make sure the user exists in the database
    useEffect(() => {
      const fetchData = async () => {
        try {
          // edit fetch to include userid from login
          const response = await fetch("http://localhost:8080/accounts/");
          const data = await response.json();
          console.log(data);
          console.log(data[0]);
          //do something with the data
        } catch (error) {
          console.error("Error: ", error);
        }
      };
      fetchData();
    }, []);
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
