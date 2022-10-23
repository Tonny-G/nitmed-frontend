import React from 'react'
import "./home.scss"
import SideBar from '../SideBar/SideBar'
import DisplayDonations from '../Display/DisplayDonations'
import DisplayUsers from '../Display/DisplayUsers'




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
        <div>
          <DisplayDonations/>
         
          <div><DisplayUsers/></div>
        
        </div>
      </div>
      </navbar>
   
    </div>
  )
}

export default Home