import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import axios from "axios"
import Background from '../Images/Nitmed.png'

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", { email, password })
      setUser(res.data)


    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div className='loginPage'>
      <div className="loginContainer">
        <div className="loginPageLeft">
          <div className="imageContainer">
            <img src={Background} alt="login" />
          </div>
        </div>
        <div className="loginPageRight">
          <div className="contentContainer">
            <div className="title"><h1>Welcome to Nitmed</h1></div>
            <div className="inputContainer">
              <form className='form' onSubmit={HandleLogin}>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Enter your email' id="email" />
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder='Enter your password' />
                <button type="submit">Sign In</button>
              </form>
              <div className = "registerLink">
                <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login