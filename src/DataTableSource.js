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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU",
    status: "active",
    email: "snow@gmail.com",
    age: 28,
  },
  {
    id: 2,
    useName: "Jenifer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QLPrRABkXLir2od2GFAcoU7Ya_bnI3SW4g&usqp=CAU",
    status: "passive",
    email: "Jenifer@gmail.com",
    age: 23,
  },
  {
    id: 3,
    useName: "Johnson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCIoKxXZss5sCIP3jHf-fWgBE9y5M3wKLRg&usqp=CAU",
    status: "pending",
    email: "Johnson@gmail.com",
    age: 58,
  },
  {
    id: 4,
    useName: "snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU",
    status: "active",
    email: "snow@gmail.com",
    age: 28,
  },
  {
    id: 5,
    useName: "Jenifer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QLPrRABkXLir2od2GFAcoU7Ya_bnI3SW4g&usqp=CAU",
    status: "passive",
    email: "Jenifer@gmail.com",
    age: 23,
  },
  {
    id: 6,
    useName: "Johnson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCIoKxXZss5sCIP3jHf-fWgBE9y5M3wKLRg&usqp=CAU",
    status: "pending",
    email: "Johnson@gmail.com",
    age: 58,
  },
  {
    id: 7,
    useName: "snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU",
    status: "active",
    email: "snow@gmail.com",
    age: 28,
  },
  {
    id: 8,
    useName: "Jenifer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QLPrRABkXLir2od2GFAcoU7Ya_bnI3SW4g&usqp=CAU",
    status: "passive",
    email: "Jenifer@gmail.com",
    age: 23,
  },
  {
    id: 9,
    useName: "Johnson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCIoKxXZss5sCIP3jHf-fWgBE9y5M3wKLRg&usqp=CAU",
    status: "pending",
    email: "Johnson@gmail.com",
    age: 58,
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

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {params.row.productName}
        </div>
      );
    },
  },
  {
    field: "userName",
    headerName: "User Name",
    width: 200,
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

export const productRows = [
  {
    id: 1,
    userName: "snow",
    img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
    productName: "Laptop",
    status: "active",
  },
  {
    id: 2,
    userName: "Jenifer",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",

    productName: "Ipad",
    status: "passive",
  },
  {
    id: 3,
    userName: "Johnson",
    img: "https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg",
    productName: "Laptop",
    status: "pending",
  },
  {
    id: 4,
    userName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    productName: "HeadPhones",
    status: "passive",
  },
  {
    id: 5,
    userName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    productName: "Ipad",
    status: "active",
  },
  {
    id: 6,
    userName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    productName: "HeadPhones",
    status: "passive",
  },
  {
    id: 7,
    userName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    productName: "Ipad",
    status: "active",
  },
  {
    id: 8,
    userName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    productName: "Ipad",
    status: "active",
  },
  {
    id: 9,
    userName: "Thomas",
    img: "https://sweetclipart.com/multisite/sweetclipart/files/imagecache/middle/headphones_pink.png",
    productName: "HeadPhones",
    status: "passive",
  },
  {
    id: 10,
    userName: "Ramesh",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-ipad-pro10in-gold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330308926",
    productName: "Ipad",
    status: "active",
  },
];
