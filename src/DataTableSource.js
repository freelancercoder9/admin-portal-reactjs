export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {params.row.useName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    useName: "snow",
    img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
    status: "active",
    email: "snow@gmail.com",
    age: 28,
  },
  {
    id: 2,
    useName: "Jenifer",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    status: "passive",
    email: "Jenifer@gmail.com",
    age: 23,
  },
  {
    id: 3,
    useName: "Johnson",
    img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
    status: "pending",
    email: "Johnson@gmail.com",
    age: 58,
  },
  {
    id: 4,
    useName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    status: "passive",
    email: "Thomas@gmail.com",
    age: 28,
  },
  {
    id: 5,
    useName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    status: "active",
    email: "ramesh@gmail.com",
    age: 18,
  },
  {
    id: 6,
    useName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    status: "passive",
    email: "Thomas@gmail.com",
    age: 28,
  },
  {
    id: 7,
    useName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    status: "active",
    email: "ramesh@gmail.com",
    age: 18,
  },
  {
    id: 8,
    useName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    status: "active",
    email: "ramesh@gmail.com",
    age: 18,
  },
  {
    id: 9,
    useName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    status: "passive",
    email: "Thomas@gmail.com",
    age: 28,
  },
  {
    id: 10,
    useName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    status: "active",
    email: "ramesh@gmail.com",
    age: 18,
  },
];
