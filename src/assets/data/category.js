import React from "react";
import pro16 from "../images/dashboard/product/1.jpg";
import pro13 from "../images/dashboard/product/2.jpg";
import pro12 from "../images/dashboard/product/3.jpg";
import pro25 from "../images/dashboard/product/4.jpg";
import pro21 from "../images/dashboard/product/5.jpg";
import pro3 from "../images/dashboard/product/6.jpg";
import pro14 from "../images/dashboard/product/7.jpg";
import pro20 from "../images/dashboard/product/8.jpg";
import pro19 from "../images/dashboard/product/9.jpg";
import pro18 from "../images/dashboard/product/10.jpg";
import jwel12 from "../images/dashboard/product/11.jpg";
import jwel26 from "../images/dashboard/product/12.jpg";
import furniture8 from "../images/dashboard/product/13.jpg";
import cat3 from "../images/dashboard/product/14.jpg";
import fashion12 from "../images/dashboard/product/15.jpg";
import shoes from "../images/dashboard/product/16.jpg";
import pro06 from "../images/dashboard/product/17.jpg";
import pro9 from "../images/dashboard/product/18.jpg";
import pro6 from "../images/dashboard/product/19.jpg";
import pro7 from "../images/dashboard/product/20.jpg";

const data = [
  {
    image: <img alt="" src={pro16} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Headphones",
    類型: "Electronics",
    主規格: "主規格",
    副規格: "副規格",
    price: "$20.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    庫存: 3,
    開始時間: 5,
    結束時間: 10,
  },
  {
    image: <img alt="" src={pro13} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Honor Mobile",
    product_type: "test",
    price: "$462.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro12} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Samsung LED TV",
    product_type: "test",
    price: "$652.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro25} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Motorola Bluetooth",
    product_type: "test",
    price: "$25.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro21} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Apple 6s",
    product_type: "test",
    price: "$782.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro3} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Printer",
    product_type: "test",
    price: "$4825.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro14} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Canon Camera",
    product_type: "test",
    price: "$2461.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro20} style={{ width: 50, height: 50 }} />,
    product_name: "High uality Headphones",
    product_type: "test",
    price: "$761.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro19} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Hom Theater Speakers",
    product_type: "test",
    price: "$672.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Electronics",
  },
  {
    image: <img alt="" src={pro18} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Diamond Ring",
    product_type: "test",
    price: "$237.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "Jewellery",
  },
  {
    image: <img alt="" src={jwel12} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Diamond Nacklace",
    product_type: "test",
    price: "$3579.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Jewellery",
  },
  {
    image: <img alt="" src={jwel26} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Diamond Earrings",
    product_type: "test",
    price: "$3145.00",
    status: <i className="fa fa-circle font-danger f-12" />,
    category: "Jewellery",
  },
  {
    image: <img alt="" src={furniture8} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Night lamp",
    product_type: "test",
    price: "$84.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "furniture",
  },
  {
    image: <img alt="" src={cat3} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "men's shoes",
    product_type: "test",
    price: "$67.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "shoes",
  },
  {
    image: <img alt="" src={fashion12} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Ledi's red top",
    product_type: "test",
    price: "$234.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "clothes",
  },
  {
    image: <img alt="" src={shoes} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "atest ledis shoes",
    product_type: "test",
    price: "$357.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "shoes",
  },
  {
    image: <img alt="" src={pro06} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Woman one pis",
    product_type: "test",
    price: "$682.00",
    status: <i className="fa fa-circle font-success f-12" />,
    category: "clothes",
  },
  {
    image: <img alt="" src={pro9} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Mouse",
    product_type: "test",
    price: "$24.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "electronics",
  },
  {
    image: <img alt="" src={pro6} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Coffee maker",
    product_type: "test",
    price: "$9721.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "electronics",
  },
  {
    image: <img alt="" src={pro7} style={{ width: 50, height: 50 }} />,
    product_id: "1234567",
    product_name: "Diamond Nacklace",
    product_type: "test",
    product_type: "test",
    price: "$3579.00",
    status: <i className="fa fa-circle font-warning f-12" />,
    category: "Jewellery",
  },
];

export { data };
