import React, { useState } from 'react'
import './register.scss';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Status from '../Status/Status';
import Background from '../Images/Nitmed.png'



function Register() {
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [statusOpen, setStatusOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('')


  const ValidatePassword = () => {

    if (confirmPassword !== password) {
      setError(true)
      setStatusOpen(true)
      setErrorMessage("Confirm password is not match")
      setStatusMessage(errorMessage)
      return false
    }
    //Complexity
    return true
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const isValid = ValidatePassword()
      if (!isValid) {
        console.log("password mismatch")
        return
      }

      console.log({ fullname, email, phone, address, password, confirmPassword })
      const response = axios.post("http://localhost:8000/register", { fullname, email, phone, address, password, confirmPassword });
      setfullname('')
      setemail('')
      setphone('')
      setaddress('')
      setpassword('')
      setConfirmPassword('')
      console.log(response)


    } catch (e) {
      console.log(e)
    }
    
   

  }

  return (
    <div className='registerPage'>
      <div className="registerContainer">
        <div className="registerPageLeft">
          <div className="imageContainer">
            <img src={Background} alt="register" />
          </div>
        </div>
        <div className="registerPageRight">
          <div className="contentContainer">
            <div className="title"><h1>Sign Up</h1></div>
            <div className="inputContainer">
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="fullname">FullName</label>
                <input onChange={(e) => setfullname(e.target.value)} type="text"  placeholder='Enter your fullname' id="fullname" />
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setemail(e.target.value)} type="email"  placeholder='Enter your email' id="emil" />
                <label htmlFor="phone">Phone</label>
                <input onChange={(e) => setphone(e.target.value)} type="text" placeholder='Enter your phone' id="phne" />
                <label htmlFor="address">Address</label>
                <input onChange={(e) => setaddress(e.target.value)} type="text"  placeholder='Enter your address' id="addr" />
                <label htmlFor="password">Password </label>
                <input onChange={(e) => setpassword(e.target.value)} type="password"  placeholder='Enter your password' />
                <label htmlFor="password">Confirm Password </label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm password' />
                
                <button type="submit">Register</button>
              </form>

              <div className="registerLink">
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register;