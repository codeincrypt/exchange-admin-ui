import React from "react";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FaCoins, FaRobot } from "react-icons/fa";
import { SiLiquibase } from "react-icons/si";
import { PiPasswordBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import {
  LiaMoneyBillAltSolid,
  LiaCogSolid,
  LiaUserCheckSolid,
} from "react-icons/lia";

const SettingSidebar = () => {
  const location = useLocation();
  
  return (
    <ListGroup className="card">
      <Link to="/setting/crypto-coins">
        <ListGroup.Item className={`list-group-item-dark ${location.pathname === '/setting/crypto-coins' ? 'active' : ''} ${location.pathname === '/setting' ? 'active' : ''} ${location.pathname === '/setting/' ? 'active' : ''}`}>
          <FaCoins className="mr-2" /> Crypto Coins
        </ListGroup.Item>
      </Link>
      <Link to="/setting/liquidity-setting">
        <ListGroup.Item className="list-group-item-dark">
          <SiLiquibase className="mr-2" /> Liquidity Setting
        </ListGroup.Item>
      </Link>
      <Link to="/setting/fiat-setting">
        <ListGroup.Item className="list-group-item-dark">
          <LiaMoneyBillAltSolid className="mr-2" /> Fiat Setting
        </ListGroup.Item>
      </Link>
      <Link to="/setting/bot-setting">
        <ListGroup.Item className="list-group-item-dark">
          <FaRobot className="mr-2" /> Bot Setting
        </ListGroup.Item>
      </Link>
      <Link to="/setting/user-setting">
        <ListGroup.Item className="list-group-item-dark">
          <LiaCogSolid className="mr-2" /> User Setting
        </ListGroup.Item>
      </Link>
      <Link to="/setting/admin">
        <ListGroup.Item className={`list-group-item-dark ${location.pathname === '/setting/admin' ? 'active' : ''}`}>
          <LiaUserCheckSolid className="mr-2" /> Admin & Moderators
        </ListGroup.Item>
      </Link>
      <Link to="/setting/two-factor-authentication" >
        <ListGroup.Item className={`list-group-item-dark ${location.pathname === '/setting/two-factor-authentication' ? 'active' : ''}`}>
          <MdSecurity className="mr-2" /> 2 Factor Authentication
        </ListGroup.Item>
      </Link>
      <Link to="/setting/change-password">
        <ListGroup.Item className={`list-group-item-dark ${location.pathname === '/setting/change-password' ? 'active' : ''}`}>
          <PiPasswordBold className="mr-2" /> Change Password
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};

export default SettingSidebar;
