import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar></Sidebar>
      <div className="singleContainer">
        <Navbar></Navbar>
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://th.bing.com/th/id/OIP.GlAsh-wldOv6T99EtGr1GQHaIJ?w=186&h=205&c=7&r=0&o=5&pid=1.7"
                alt="itemImage"
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Sherli Deo</h1>
                <div className="detailItem">
                  <span className="itemKey"> Email: </span>
                  <span className="itemVal">sherlideo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Phone: </span>
                  <span className="itemVal">+91 12998 9878</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Address: </span>
                  <span className="itemVal">Hyderabad</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Country: </span>
                  <span className="itemVal">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 months)"></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List></List>
        </div>
      </div>
    </div>
  );
};

export default Single;
