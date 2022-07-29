import React from 'react'
import "./home.scss"
import {  Link } from "react-router-dom";

import Donate from '../Donate/Donate'
import Order from '../Order/Order'
import About from '../About/About'
import SideBar from '../SideBar/SideBar'



const Home = ({setUser}) => {
  return (
    <div className = "homeContainer">
      <SideBar />
      <navbar className = "navBar">
      <ul className='nav-links'>
            <button onClick={()=>setUser(null)} >Log Out</button>
        </ul>
        <div className='footer'> <u>OUR EVENTS AND NEWS</u>
      <div className='blogs'>No blogs to display at the moment</div>
      </div>
      </navbar>
   
    </div>
  )
}

export default Home