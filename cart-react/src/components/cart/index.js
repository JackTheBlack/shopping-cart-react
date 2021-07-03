import React, { useState, useEffect } from "react";

function CART({ products }) {
  let count = 0;
  return (
    <div>
      <table className="table">
        <tr data-testid="cart-item-0">
          <th> * </th>
          <th>Item</th>
          <th>Quantity</th>
        </tr>

        {products.map((i, index) => {
          count = count + 1;
          return (
            <div>
              {i.cartQuantity > 0 && (
                <table className="table">
                  <tr>
                    <td> {count} </td>
                    <td data-testid="cart-item-name"> {i.item} </td>
                    <td data-testid="cart-item-quantity"> {i.cartQuantity} </td>
                  </tr>
                </table>
              )}
            </div>
          );
        })}
      </table>
    </div>
  );
}

export default CART;
