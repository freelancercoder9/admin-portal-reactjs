import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import img2 from "../../images/img2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"></LanguageOutlinedIcon>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"></DarkModeOutlinedIcon>
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon"></FullscreenOutlinedIcon>
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon"></NotificationsOutlinedIcon>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"></ChatBubbleOutlineOutlinedIcon>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon"></FormatListBulletedOutlinedIcon>
          </div>
          <div className="item">
            <img src={img2} alt="" className="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
