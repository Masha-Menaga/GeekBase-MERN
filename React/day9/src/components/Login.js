import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Login = () => {
    const [name, setName] = useState("")
    const { handleLoginAuth } = useContext(AuthContext)
    const navigate = useNavigate();
    function handleLogin() {
        if (name === "jaishree") {
            console.log("Login Successful!")
            handleLoginAuth();
            navigate("/");
        } else {
            console.log("Invalid Name or Password")
        }
    }
    return (
        <div><dialog open>
            <label>Name : </label>
            <input type="text" onChange={(e) => { setName(e.target.value) }} /><br /><br />
            <label>Password : </label>
            <input type="password" />
            <button onClick={handleLogin}>Login</button>
        </dialog></div>
    )
}

export default Login