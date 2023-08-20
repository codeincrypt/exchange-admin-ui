// import { useLocation } from 'react-router';
import logo from "../../assets/images/icon-logo.png";
import { Link } from 'react-router-dom';

import { AiOutlineDashboard } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsWallet, BsCurrencyBitcoin } from 'react-icons/bs';
import { PiContactlessPayment } from 'react-icons/pi';
import { RiFolderHistoryLine } from 'react-icons/ri';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { LiaMoneyBillAltSolid, LiaCogSolid } from 'react-icons/lia';


const Sidebar = (props) => {
  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <sidebar className="my-sidebar">
      <div className='text-center mt-3'>
        <img src={logo} alt="binance" className="header-logo" />
      </div>

      <ul class="sidebar-list mt-4">
        <Link className='sidebar-list-item icon-lg' to="/dashboard" title="Dashboard" ><AiOutlineDashboard /></Link>
        <Link className='sidebar-list-item icon-lg' to="/crypto-balance" title="Crypto balance" ><BsCurrencyBitcoin /></Link>
        <Link className='sidebar-list-item icon-lg' to="/users" title="Users" ><FiUsers /></Link>
        <Link className='sidebar-list-item icon-lg' to="/operations" title="Send Operations" ><FaMoneyBillAlt /></Link>
        <Link className='sidebar-list-item icon-lg' to="/payment-history" title="Payment History" ><BsWallet /></Link>
        <Link className='sidebar-list-item icon-lg' to="/send-receive" title="Send Receive" ><RiFolderHistoryLine /></Link>
        <Link className='sidebar-list-item icon-lg' to="/buy-sell" title="Buy Sell" ><PiContactlessPayment /></Link>
        <Link className='sidebar-list-item icon-lg' to="/fiat" title="Fiat Deposit & Withdrawal" ><LiaMoneyBillAltSolid /></Link>
        <Link className='sidebar-list-item icon-lg' to="/setting" title="Setting" ><LiaCogSolid /></Link>
      </ul>
    </sidebar>
  )
}

export default Sidebar