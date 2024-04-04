import React from "react";
import "./FoodOrder.css";
// import Cart from "../cart/Cart";

const FoodOrder = ({
  selectedFood,
  updateQuantity,
  returnToMenu,
  isShow,
  quantity,
  handleQuantityChange,
  totalAmount,
  name,
  setName,
  mobile,
  setMobile,
  setFullName,
  setQuantity,
  customerName,
  len,
}) => {
  const handleClick = () => {
    updateQuantity(selectedFood.id, quantity);
    setFullName({ customerName: name, customermobile: mobile });
    setMobile("");
    setName("");
    setQuantity("");
  };

  return (
    <>
      {!isShow && ( //Displays selected item
        <ul className="ulFoodDetails">
          <li className="orderedItem">
            <h1 className="selFoodTitle">{selectedFood.name}</h1>
            <img
              className="selFoodImg"
              src={require(`../../images/${selectedFood.image}`)}
              alt={selectedFood.name}
              style={{ height: 300, width: 300 }}
            />

            <p className="selFoodDesc">{selectedFood.desc}</p>
            <p className="selFoodPrice">${totalAmount ? totalAmount : 0}</p>
          </li>
        </ul>
      )}

      {!isShow && (
        <ul className="ulFoodDetails">
          <li className="selQuantity">
            <label>Quantity</label>
            <input
              type="number"
              defaultValue={1}
              className="quantity"
              min="1"
              max="100"
              onChange={handleQuantityChange}
            />
          </li>
          <li className="liDetails">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="liFields"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your Name"
            />
          </li>
          <li className="liDetails">
            <label htmlFor="mobile"></label>
            <input
              type="text"
              className="liFields"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              placeholder="Your mobile number"
            />
          </li>
          <li>
            <button className="btn btnOrder" onClick={handleClick}>
              Submit Order
            </button>
            <button
              className="btn btnReturnMenu"
              onClick={() => returnToMenu("")}
            >
              Return to Menu
            </button>
          </li>
        </ul>
      )}

      {/* {len && customerName && <h2>Welcome {customerName}!</h2>} */}
    </>
  );
};

export default FoodOrder;

// {selectedFood.map((selectedItem) => {
//   return (
//     <div key={selectedItem.id}>
//       <h4 className="selFoodTitle">{selectedItem.name}</h4>
//       <img
//         className="selFoodImg"
//         src={require(`../../images/${selectedItem.image}`)}
//         alt={selectedItem.name}
//       />
//     </div>
//   );
// })}

// {selectedFood.map((selectedItem) => {
//   return (
//     <ul className="ulFoodDetails" key={selectedItem.id}>
//       <li>
//         <p className="selFoodDesc">{selectedItem.desc}</p>
//       </li>
//       <li>
//         <p className="selFoodPrice">{totalAmount}$</p>
//       </li>
//       <li className="selQuantity">
//         <label>Quantity</label>
//         <input
//           type="number"
//           defaultValue={1}
//           className="quantity"
//           min="1"
//           max="10"
//           onChange={handleQuantityChange}
//         />
//       </li>
//       <li className="liDetails">
//         <label for="name"></label>
//         <input
//           type="text"
//           className="liFields"
//           id="name"
//           name="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Your Name"
//         />
//       </li>
//       <li className="liDetails">
//         <label for="mobile"></label>
//         <input
//           type="text"
//           className="liFields"
//           id="mobile"
//           name="mobile"
//           value={mobile}
//           onChange={(event) => setMobile(event.target.value)}
//           placeholder="Your mobile number"
//         />
//       </li>
//       <li>
//         <button className="btn btnOrder" onClick={handleClick}>
//           Submit Order
//         </button>
//         <button className="btn btnReturnMenu" onClick={handreturn}>
//           Return to Menu
//         </button>
//       </li>
//       <ul>{isOrdered && cart.length && <Cart cart={cart} />}</ul>
//       {isOrdered && (
//         <li className="liMessage">
//           <label>
//             Order Submitted! You will receive an SMS on your mobile,
//             {customermobile}, once ready, for pickup.
//           </label>

//           <h3>
//             Total Bill is {cartValue}$ for {cart.length} products
//           </h3>
//         </li>
//       )}
//       {customerName && <h2>Welcome {customerName}!</h2>}
//     </ul>
//   );
// })}

// const handleClick = () => {
//   setIsOrdered(true);
//   selectedFood.map((selectedItem) =>
//     updateQuantity(selectedItem.id, quantity)
//   );
//   setFullName({ customerName: name, customermobile: mobile });
//   setMobile("");
//   setName("");
// };

// const handleQuantityChange = (event) => {
//   const amount = selectedFood.map((selectedItem) => {
//     return selectedItem.price * event.target.value;
//   });

//   setQuantity(event.target.value);
//   setTotalAmount(amount);
// };

// const unitPrice = () => {
//   return selectedFood.map((selectedItem) => {
//     return selectedItem.price;
//   });
// };

// const amount = selectedFood.map((selectedItem) => {
//   return selectedItem.price * event.target.value;
// });

{
  /* <ul>
{isOrdered && isShow && cart.length && (
  <Cart
    cart={cart}
    handleShowCart={handlecheckout}
    isShow={isShow}
    returnToMenu={returnToMenu}
    totalAmount={totalAmount}
    customermobile={customermobile}
    cartValue={cartValue}
  />
)}
</ul> */
}
