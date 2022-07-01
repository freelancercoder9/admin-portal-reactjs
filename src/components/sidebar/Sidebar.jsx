import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar ">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"></PersonOutlineOutlinedIcon>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2Icon className="icon"></Inventory2Icon>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <FilterFramesIcon className="icon"></FilterFramesIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"></LocalShippingIcon>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon"></AssessmentIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon"></SettingsSystemDaydreamOutlinedIcon>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"></PsychologyOutlinedIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"></SettingsApplicationsIcon>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"></AccountCircleOutlinedIcon>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"></ExitToAppOutlinedIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
