import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>
          <Widget type="earning"></Widget>
          <Widget type="balance"></Widget>
        </div>
        <div className="charts">
          <Featured></Featured>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}></Chart>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
