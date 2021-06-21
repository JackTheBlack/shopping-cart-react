import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const products = [
  {
    name: "Leather Jacket",
    price: 60,
    id: 11,
    cartQuantity: 0,
    img: "https://casualdressesforwomen.net/wp-content/uploads/2018/09/Leather-Jacket-of-Hank-Moody-Californication.png",
  },
  {
    name: "Billy Jeans",
    price: 50,
    id: 1,
    cartQuantity: 0,
    img: "https://http2.mlstatic.com/D_NQ_NP_653255-MLA43802165234_102020-O.jpg",
  },
  {
    name: "Cap",
    price: 20,
    id: 2,
    cartQuantity: 0,
    img: "https://media.nauticamilanonline.com/product/gorra-marvel-800x800.jpg",
  },
  {
    name: "Sweter",
    price: 35,
    id: 3,
    cartQuantity: 0,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/232/893/products/7cac35f7-6a1f-42c3-934e-7dca28df44831-df2a70da7ed791e40415502500038411-1024-1024.jpeg",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App products={products} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
