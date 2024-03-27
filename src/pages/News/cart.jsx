import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.Id}>
            <h3>{item.name}</h3>
            <p>
              {item.category}, {item.price} Bath
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;