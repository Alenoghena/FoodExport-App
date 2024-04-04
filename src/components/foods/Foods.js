import React from "react";
import "./Foods.css";
import FoodOrder from "../orders/FoodOrder";

const Foods = ({
  foodItems,
  updateQuantity,

  handleCheckout,
  isShow,
  selectedFood,
  setSelectedFood,
  handleSelect,
  quantity,
  handleQuantityChange,
  totalAmount,
  handleShowCart,
  name,
  setName,
  mobile,
  setMobile,
  setFullName,
  setQuantity,
  customerName,
  len,
}) => {
  return (
    <>
      {!selectedFood &&
        !isShow && ( //Show here if not selected.
          <>
            {foodItems.map((item) => {
              return (
                //Displays List of items
                <ul className="ulFoods" key={item.id}>
                  <li
                    className="liFoods"
                    data-id={item.id}
                    onClick={(e) => handleSelect(e)}
                  >
                    <img
                      className="foodImg"
                      src={require(`../../images/${item.image}`)}
                      alt={item.name}
                      style={{ height: 150, width: 150 }}
                    />

                    <div className="foodItem">
                      <p className="foodName"> {item.name}</p>
                      {/* <p className="foodDesc">{item.desc}</p> */}
                      <p className="foodPrice">${item.price}</p>
                    </div>
                  </li>
                </ul>
              );
            })}
          </>
        )}
      {selectedFood && ( //Show here if selected.
        <FoodOrder
          selectedFood={selectedFood}
          returnToMenu={setSelectedFood}
          updateQuantity={updateQuantity}
          isShow={isShow}
          handleCheckout={handleCheckout}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          totalAmount={totalAmount}
          handleShowCart={handleShowCart}
          name={name}
          setName={setName}
          mobile={mobile}
          setMobile={setMobile}
          setFullName={setFullName}
          setQuantity={setQuantity}
          customerName={customerName}
          len={len}
        />
      )}
    </>
  );
};

export default Foods;

// import React from "react";
// import "./Foods.css";

// const Foods = ({ foodItems }) => {
//   return (
//     <>
//       <h4 className="foodTitle">Choose from our Menu</h4>
//       <ul className="ulFoods">
//         {foodItems.map((item) => {
//           return (
//             <li key={item.id} className="liFoods">
//               <img
//                 className="foodImg"
//                 src={require(`./images/${item.image}`)}
//                 alt={item.name}
//               />
//               <div className="foodItem">
//                 <p className="foodDesc">{item.desc}</p>
//                 <p className="foodPrice">{item.price}$</p>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// const [selectedFood, setSelectedFood] = useState("");

//Below was used when selectedFood was string in useState
// const handleSelect = (event) => {
//   console.log(event.currentTarget.dataset.id);
//   setSelectedFood(
//     foodItems.find((item) => {
//       return item.id === parseInt(event.currentTarget.dataset.id);
//     })
//   );
// };
