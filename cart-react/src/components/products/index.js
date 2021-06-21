import React, { useState } from "react";
import CART from "../cart";
import "./index.css";

function PRODUCTS({ products }) {
  const [article, setArticle] = useState([...products]);
  const [cartList, setCartList] = useState([]);

  const handleAddCartList = (index) => {
    let listedProduct = {
      id: article[index].id,
      item: article[index].name,
      cartQuantity: article[index].cartQuantity,
    };

    if (article[index].cartQuantity === 1) {
      let aux = [...cartList];
      aux = [...aux, listedProduct];
      setCartList([...aux]);

      console.log(cartList["lastIndexOf"]);
    } else if (article[index].cartQuantity > 1) {
      let aux = [...cartList];
      //encuentro el producto en el carro con el mismo id del articulo que sumo

      let existCartProduct = aux.find(
        (element) => element["id"] === article[index].id
      );

      existCartProduct["cartQuantity"] = existCartProduct.cartQuantity + 1;
      //enccuentro la posicion en el carro que ocupa el articulo que le sumo
      let cartIndex = cartList.findIndex(
        (obj) => obj["item"] === article[index].name
      );
      aux[cartIndex] = existCartProduct;
      setCartList([...aux]);
    }
  };

  const handleSubCartList = (index) => {
    if (article[index].cartQuantity >= 1) {
      let aux = [...cartList];
      let cartIndex = aux.findIndex(
        (element) => element["id"] === article[index].id
      );
      aux[cartIndex].cartQuantity = aux[cartIndex].cartQuantity - 1;
      setCartList([...aux]);
    }
    if (article[index].cartQuantity === 0) {
      let aux = [...cartList];
      let cartIndex = aux.findIndex(
        (element) => element["id"] === article[index].id
      );
      console.log(cartIndex);
      aux.splice(cartIndex, 1);

      setCartList([...aux]);

      console.log(aux);
    }
  };

  const handleAddProduct = (product, index) => {
    let aux = [...article];
    aux[index].cartQuantity = aux[index].cartQuantity + 1;
    setArticle([...aux]);
    handleAddCartList(index);
  };

  const handleDropProduct = (product, index) => {
    let aux = [...article];
    aux[index].cartQuantity = aux[index].cartQuantity - 1;
    setArticle([...aux]);
    handleSubCartList(index);
  };

  return (
    <div>
      <section className="products">
        {article.map((i, index) => {
          return (
            <div>
              <img src={i.img} alt={i.name} width="250" height="300" />
              {i.cartQuantity === 0 && (
                <div>
                  {" "}
                  <button
                    type="button"
                    data-testid="btn-item-add"
                    onClick={() => handleAddProduct(i, index)}
                  >
                    Add on Cart
                  </button>
                </div>
              )}
              {i.cartQuantity > 0 && (
                <div>
                  <button
                    data-testid="btn-quantity-add"
                    onClick={() => handleAddProduct(i, index)}
                    type="button"
                  >
                    +
                  </button>{" "}
                  <label data-testid="cart-quantity"> {i.cartQuantity} </label>
                  <button
                    data-testid="btn-quantity-subtract"
                    onClick={() => handleDropProduct(i, index)}
                    type="button"
                  >
                    -
                  </button>
                </div>
              )}

              <p>{i.name}</p>
            </div>
          );
        })}
      </section>
      <section className="Cart">
        <CART products={cartList} />
      </section>
    </div>
  );
}

export default PRODUCTS;
