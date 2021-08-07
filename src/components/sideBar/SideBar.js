import React from 'react';
import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import './SideBar.css';

const sideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem ">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
