import React,{useState,useEffect} from "react";
import axios from 'axios'
import '../Display/DisplayUsers.scss'


const DisplayUsers = () => {
    const [show,SetShow]=useState([])
    const fetchUser= async()=>{
        try{const res=await axios.get("http://localhost:8000/register")
        SetShow(res.data)
        console.log(res)
    }catch(err){
        console.log(err.res)
        console.log(err.status)
    }

    }
    useEffect(()=>{
        fetchUser();
    },[])


  return (


    <div>
    <div className="head"><h2>Registerd Users</h2></div>
        <div className="bod"><h1>{show.length}</h1></div>
    </div>

)};

export default DisplayUsers