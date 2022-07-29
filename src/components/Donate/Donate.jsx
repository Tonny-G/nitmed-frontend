import React, { useState } from 'react'
import axios from 'axios'
import SideBar from '../SideBar/SideBar';
import './donate.scss'

function Donate() {
    const[donorName,setDonorName]=useState('');
    const[medName,setMedName]=useState('');
    const[medType,setMedType]=useState('');
    const[medLotNo,setMedLotNo]=useState('');
    const[medExpDate,setMedExpDate]=useState('');

    const  handleSubmit=async (e)=>{
        e.preventDefault()
        try{
        console.log({donorName,medName,medType,medLotNo,medExpDate})
        const response = axios.post("http://localhost:8000/donation",{donorName,medName,medType,medLotNo,medExpDate});
        setDonorName('')
        setMedName('')
        setMedType('')
        setMedLotNo('')
        setMedExpDate('')
        console.log(response)

    
      
    
    
        }catch(e){
          console.log(e)
        }
       
      }
  return (
    <div className = "donatePage">
        <SideBar />
        <div className='donate'>
          <div>
          

          <div className='title'><h3>Donation Form</h3></div>
            <form onSubmit={handleSubmit} className='donate-container'>
            <label htmlFor="donorname">Donor Name</label>
            <div className='input-group'> <input placeholder='Donor Name' type='text' value={donorName}
            onChange={(e)=>{setDonorName(e.target.value)}}></input></div>
            <label htmlFor="mediciname">Medicine Name</label>
            <div className='input-group'> <input placeholder='Medicine Name' type='text' value={medName}
            onChange={(e)=>{setMedName(e.target.value)}}></input></div>
            <label htmlFor="medicinetype">Medicine Type</label>
            <div className='input-group'> <input placeholder='Medicine Type' type='text' value={medType}
            onChange={(e)=>{setMedType(e.target.value)}}></input></div>
            <label htmlFor="medicinelotno">Medicine Lot No</label>
            <div className='input-group'> <input placeholder='Medicine Lot No' type='text' value={medLotNo}
            onChange={(e)=>{setMedLotNo(e.target.value)}}></input></div>
            <label htmlFor="medicineexpdate">Medicine Exp Date</label>
            <div className='input-group'> <input placeholder='Medicine Exp date' type='date' value={medExpDate}
            onChange={(e)=>{setMedExpDate(e.target.value)}}></input></div>
           
            <div className='btn-div'><button type='submit'>Submit</button></div>
            
           
            </form>
          </div>
        </div>
    </div>
  )
}

export default Donate;