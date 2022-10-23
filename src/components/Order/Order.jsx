
// import SideBar from '../SideBar/SideBar'
// import './order.scss'
// import React ,{useState,useEffect} from 'react'
// import axios from 'axios'



// const Order= (e)=>{
//     const [display, setDisplay]=useState([])

//        const fetchData=async ()=>{
//         try{ const res= await axios.get("http://localhost:8000/donation")
//             setDisplay (res.data)
//             console.log(display)
//        }catch(err){
//         console.log(err.res)
//         console.log(err.status)
//        }
//     ;}
    
//     useEffect(()=>{
//         fetchData();
//     },[]);

// return(
//     <div className='orderpage' >
//     <SideBar/>
//     <div className='order'><h2> <i>Donations Report</i> </h2>
//          <div >
//             <h1 className="orderbody">{display.map( (medName)=>{return(<li >donations={medName}</li>)})}</h1>
//         </div></div>

// </div>


// )}
// export default Order
