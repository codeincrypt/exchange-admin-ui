import React from 'react'
import logo from "../../assets/images/icon-logo.png";

const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <div className='text-center'>
        <img src={logo} alt="binance" className="header-logo" />
      </div>

      <ul class="list-group transparent border-0">
        <li class="list-group-item"> <i className='fa fa-user'></i> </li>
        <li class="list-group-item"> <i className='fa fa-user'></i> </li>
        <li class="list-group-item"> <i className='fa fa-user'></i> </li>
        <li class="list-group-item"> <i className='fa fa-user'></i> </li>
      </ul>
    </sidebar>
  )
}

export default Sidebar