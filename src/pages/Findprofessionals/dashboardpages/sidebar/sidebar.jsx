import React from "react";
import {
  BiBookAlt,
  BiHelpCircle,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
} from "react-icons/bi";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>Professionals</h2>
      </div>
      <ul className="menu__list">
        <li className="list-item">
          <Link to="/" className="item">
            <BiHome className="icon" />
            Dashboard
          </Link>
        </li>

        <li className="list-item">
          <Link to="order" className="item">
            <BiTask className="icon" />
            Assignment
          </Link>
        </li>
        <li className="list-item">
          <a href="#" className="item">
            <BiSolidReport className="icon" />
            Report
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="item">
            <BiStats className="icon" />
            Stats
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="item">
            <BiMessage className="icon" />
            Message
          </a>
        </li>

        <li className="list-item">
          <a href="#" className="item">
            <BiHelpCircle className="icon" />
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
