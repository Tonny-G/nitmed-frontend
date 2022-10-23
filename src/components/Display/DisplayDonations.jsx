import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './DisplayDonations.scss'


const DisplayDonations= (e)=>{
    const [display, setDisplay]=useState([])

       const fetchData=async ()=>{
        try{const response= await axios.get("http://localhost:8000/donation")
            setDisplay(response.data)
            console.log(response)
       }catch(err){
        console.log(err.res)
        console.log(err.status)
       }
    ;}
    
    useEffect(()=>{
        fetchData()
    },[]);

return(
    <div >
    <div className='title'><h2> <i>Total Donations</i> </h2></div>
         <div >
            <h1 className="display-body">{display.length}</h1>
        </div>

</div>


)}
export default DisplayDonations