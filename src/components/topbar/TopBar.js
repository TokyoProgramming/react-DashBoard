import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topBarContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://albanyvet.com.au/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
