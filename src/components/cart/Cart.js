import React from "react";
import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({
  cart,
  handleShowCart,
  customermobile,
  cartValue,
  handleDelete,
  totalAmount,
}) => {
  return (
    <div className="cart">
      <h2 className="heading">Your Cart List</h2>
      {cart.map((item) => {
        return (
          <li key={item.id} className="selItem">
            <h4 className="selFoodTitle">{item.name}</h4>
            <img
              className="selFoodImg"
              src={require(`../../images/${item.image}`)}
              alt={item.name}
              style={{ height: 200, width: 200, marginBottom: 20 }}
            />
            <h4>
              {item.quantity} {item.name}-{item.price}$ each-${item.totalAmount}
            </h4>
            <FaTrashAlt
              role="button"
              tabIndex={0}
              aria-label={`Delete ${item.title}`}
              onClick={() => handleDelete(item.id)}
            />
          </li>
        );
      })}

      <li className="liMessage">
        <label>
          Order Submitted! You will receive an SMS on your mobile,
          {customermobile}, once ready, for pickup.
        </label>

        <h3>
          Total Bill is ${cartValue} for {cart.length} products
        </h3>
      </li>

      <button
        type="button"
        className="btn menuItems"
        onClick={(e) => handleShowCart(e)}
      >
        Go To MenuItems
      </button>
    </div>
  );
};

export default Cart;
