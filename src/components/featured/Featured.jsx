import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"></MoreVertIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={50}
            text={"50%"}
            strokeWidth={5}
          ></CircularProgressbar>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$100</p>
        <p className="desc">
          Prevoius transactions processing.Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
              <div className="resultAmount">$12.8k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
              <div className="resultAmount">$12.8k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
              <div className="resultAmount">$12.8k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
