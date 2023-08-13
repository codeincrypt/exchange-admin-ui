import React from 'react'
import logo from "../../assets/images/icon-logo.png";
import { Link } from 'react-router-dom';

import { AiOutlineDashboard } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { PiContactlessPayment } from 'react-icons/pi';
import { RiFolderHistoryLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <div className='text-center mt-3'>
        <img src={logo} alt="binance" className="header-logo" />
      </div>

      <ul class="sidebar-list mt-4">
        <Link className='sidebar-list-item' to="/dashboard" title="Dashboard" ><AiOutlineDashboard /></Link>
        <Link className='sidebar-list-item' to="/users" title="Users" ><FiUsers /></Link>
        <Link className='sidebar-list-item' to="/payment-history" title="Payment History" ><BsWallet /></Link>
        <Link className='sidebar-list-item' to="/send-receive" title="Send Receive" ><RiFolderHistoryLine /></Link>
        <Link className='sidebar-list-item' to="/buy-sell" title="Buy Sell" ><PiContactlessPayment /></Link>
      </ul>
    </sidebar>
  )
}

export default Sidebar