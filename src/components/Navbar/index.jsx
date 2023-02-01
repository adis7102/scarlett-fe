import React from "react";
import { Link } from 'react-router-dom';

import Arrow from "../../assets/icon-images/arrow.png";

import './style.scss';

const Navbar = () => {
  
  return (
    <div className="navbar-comp">
      <div className="navbar-comp-routing">
        <div className="page-title">
          <p>My Todo List</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
