import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1234,
      product: "Laptop",
      img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
      customer: "Kamesh",
      date: "12 march",
      amount: 1209,
      method: "online",
      status: "Approved",
    },
    {
      id: 16534,
      product: "Ipad",
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
      customer: "Ramesh",
      date: "23 march",
      amount: 1209,
      method: "online",
      status: "Approved",
    },
    {
      id: 123984,
      product: "Laptop",
      img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
      customer: "Charlie",
      date: "10 march",
      amount: 1209,
      method: "online",
      status: "Pending",
    },
    {
      id: 1234,
      product: "HeadPhones",
      img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
      customer: "JohnSson",
      date: "1 march",
      amount: 120,
      method: "online",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />

                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
