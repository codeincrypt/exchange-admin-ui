import React from 'react'
import logo from "../../assets/images/icon-logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <div className='text-center mt-3'>
        <img src={logo} alt="binance" className="header-logo" />
      </div>

      <ul class="sidebar-list mt-4">
        <Link className='sidebar-list-item' to="/dashboard"><i className='fa fa-dashcube '></i></Link>
        <Link className='sidebar-list-item' to="/users"><i className='fa fa-user'></i></Link>
        <Link className='sidebar-list-item' to="/payment-history"><i className='fa fa-user'></i></Link>
        <Link className='sidebar-list-item' to="/buy-sell"><i className='fa fa-user'></i></Link>
        <Link className='sidebar-list-item' to="/send-receive"><i className='fa fa-user'></i></Link>
        {/* <Link to="/"><li class="list-group-item"> <i className='fa fa-user'></i> </li></Link>
        <Link to="/users"><li class="list-group-item"> <i className='fa fa-user'></i> </li></Link>
        <Link to="/payment-history"><li class="list-group-item"> <i className='fa fa-user'></i> </li></Link>
        <Link to="/buy-sell"><li class="list-group-item"> <i className='fa fa-user'></i> </li></Link>
        <Link to="/send-receive"><li class="list-group-item"> <i className='fa fa-user'></i> </li></Link> */}
      </ul>
    </sidebar>
  )
}

export default Sidebar