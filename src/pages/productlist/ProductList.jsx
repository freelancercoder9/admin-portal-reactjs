import "./productList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";
import { productColumns, productRows } from "../../DataTableSource";
const ProductList = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <DataTable
          rowsData={productRows}
          columnData={productColumns}
          label={"Add New Product"}
        ></DataTable>
      </div>
    </div>
  );
};

export default ProductList;
