import React from 'react'
import SideBar from '../SideBar/SideBar'
import './order.scss'

function Order() {
  return (
    <div className='orderPage'>
      <SideBar  />
      <div className='order'>
        This is order page
      </div>
    </div>
  )
}

export default Order