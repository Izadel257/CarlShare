import React from "react"
import axios from 'axios';
import { useState } from "react";
import "./login.css"
function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [institutionId, setInstitutionId] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:5000/authenticate', {
        username,
        password,
        institutionId
      });

        setResponse(JSON.stringify(res.data));
    } catch (error) {
        console.error('Error:', error.response.data);
        setResponse('Failed to authenticate');
        }
    };
    return (
        <div id = "log">
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Institution ID:</label>
                <input type="text" value={institutionId} onChange={(e) => setInstitutionId(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
            <div>{response}</div>
        </div>
    )
}

export default Login