import "./userList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";
import { userRows, userColumns } from "../../DataTableSource";
const UserList = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <DataTable
          rowsData={userRows}
          columnData={userColumns}
          label={"Add New User"}
        ></DataTable>
      </div>
    </div>
  );
};

export default UserList;
