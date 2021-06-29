import React from "react";
import "./topbar.scss";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className ="itemContainer">
            <PersonIcon className="icon" />
            <span>+44 955 44 58</span>
          </div>
          <div className ="itemContainer">
            <MailIcon className="icon" />
            <span>someone@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
