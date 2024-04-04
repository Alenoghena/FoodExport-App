import React, { useState, useEffect, useCallback } from "react";
import Foods from "../foods/Foods";
import Cart from "../cart/Cart";
import "./App.css";
import Header from "./header/Header";
import { FaSearch } from "react-icons/fa";
import Button from "./button/Button";

const foodArr = [
  {
    id: 1,
    name: "Chicken Burger",
    quantity: 40,
    desc: `Fried chicken burger - lettuce, tomato, cheese and
  mayonnaise`,
    price: "24",
    image: "cb.jpg",
  },
  {
    id: 2,
    name: "Veg Burger",
    quantity: 30,
    desc: `Plant-based burger - lettuce, tomato, vegan cheese and
  mayonnaise`,
    price: "22",
    image: "vb.jpg",
  },
  {
    id: 3,
    name: "Chips",
    quantity: 50,
    desc: "Potato chips fried to perfection",
    price: "7",
    image: "chips.jpg",
  },
  {
    id: 4,
    name: "Ice Cream",
    quantity: 30,
    desc: "Ice cream - Vanilla ice cream double scoop",
    price: "4",
    image: "ic.jpg",
  },
  {
    id: 5,
    name: "Dried Ukwa Seeds",
    quantity: 30,
    desc: "1KG of Dried Ukwa - Breadfruit Seeds",
    price: "20",
    image: "dried ukwa seeds.jpg",
  },
  {
    id: 6,
    name: "Fresh Ukwa Seeds",
    quantity: 20,
    desc: "1KG of Fresh Ukwa -Breadfruit Seeds",
    price: "15",
    image: "fresh ukwa seeds.jpg",
  },
  {
    id: 7,
    name: "Oron Crayfish",
    quantity: 20,
    desc: "1KG of Oron Crayfish",
    price: "100",
    image: "cf.jpg",
  },
  {
    id: 8,
    name: "Honey Beans",
    quantity: 20,
    desc: "1KG of Honeybeans",
    price: "15",
    image: "honeybeans.jpg",
  },
  {
    id: 9,
    name: "Okomu Red Oil",
    quantity: 20,
    desc: "1KG of Red oil",
    price: "50",
    image: "oro.jpg",
  },
  {
    id: 10,
    name: "plantain-flour",
    quantity: 20,
    desc: "1KG of plantain-flour",
    price: "45",
    image: "plantain-flour.jpg",
  },
  {
    id: 11,
    name: "Red Beans",
    quantity: 20,
    desc: "1KG of red beans",
    price: "20",
    image: "redbeans.jpg",
  },
  {
    id: 12,
    name: "White Beans",
    quantity: 20,
    desc: "1KG of white beans",
    price: "20",
    image: "whitebeans.jpg",
  },
];

const App = () => {
  const unitPrice = () => {
    return selectedFood.price;
  };

  const [cartValue, setCartValue] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [menuItems, setMenuItems] = useState([]);
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [cart, setCart] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [selectedFood, setSelectedFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(unitPrice());
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [fullName, setFullName] = useState({
    customerName: "",
    customermobile: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const { customerName, customermobile } = fullName;
  const len = cart.length > 0;

  const updateQuantity = (id, orderQuantity) => {
    let cartList;
    const updatedMenuItems = menuItems.map((item) => {
      const isCartSame = cart.some((item) => item.id === id);

      if (isCartSame) {
        cartList = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + orderQuantity,
              totalAmount: item.totalAmount + totalAmount,
            };
          } else {
            return item;
          }
        });
        setCart([...cartList]);
        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity - orderQuantity,
        };
      } else if (item.id === id && !isCartSame) {
        cartList = {
          id: id,
          name: item.name,
          price: item.price,
          quantity: orderQuantity,
          image: item.image,
          totalAmount,
        };

        setCart([...cart, cartList]);

        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity - orderQuantity,
        };
      }

      return item;
    });
    setMenuItems(updatedMenuItems);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);

    setTotalAmount(selectedFood.price * event.target.value);
  };

  const handleShowCart = (e) => {
    if (e.target.className === "btn menuItems") {
      setIsShow(!isShow);
      setIsChooseFoodPage(!isChooseFoodPage);
    } else if (e.target.className === "btn btnShowCart") {
      setIsShow(!isShow);
      setIsChooseFoodPage(!isChooseFoodPage);
    }
  };
  let foodList;
  const handleSelect = (event) => {
    foodList = menuItems.find((item) => {
      return item.id === parseInt(event.currentTarget.dataset.id);
    });
    setTotalAmount(foodList.price * 1);
    setSelectedFood(foodList);
  };

  const totalCartValue = useCallback(() => {
    const value = cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, price) => sum + price, 0);
    localStorage.setItem("cart", JSON.stringify(value));
    setCartValue(value);
  }, [cart]);

  useEffect(() => {
    totalCartValue();
  }, [totalCartValue]);

  const handleDelete = (id) => {
    let cartList;

    const updatedMenuItems = menuItems.map((item) => {
      const isCartSame = cart.some((item) => item.id === id);
      const index = cart.findIndex((item) => item.id === id);

      if (isCartSame && cart[index].quantity - 1 > 0 && item.id === id) {
        cartList = cart.map((cartItem) => {
          //also look for item in cart
          if (cartItem.id === id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalAmount: cartItem.totalAmount - cartItem.price,
            };
          } else {
            return cartItem; //leave other items in cart untouched
          }
        });
        setCart([...cartList]);
        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity + 1,
        };
      }

      if (isCartSame && cart[index].quantity - 1 === 0 && item.id === id) {
        cartList = cart.filter((cartItem) => cartItem.id !== id);

        setCart([...cartList]);
        return {
          ...item, //we are spreading the item, an object, here
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setMenuItems(updatedMenuItems);
  };

  const handleSearch = (search) => {
    if (search) {
      const searchList = foodArr.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setMenuItems(searchList);
    } else {
      setMenuItems(foodArr);
    }
  };
  // const handleSearchSubmit = () => {
  //   handleSearch(searchTerm);
  // };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleChoosePage = () => {
    if (!len) {
      setIsShow(false);
      setIsChooseFoodPage(!isChooseFoodPage);
    } else {
      setIsChooseFoodPage(!isChooseFoodPage);
    }
  };

  console.log(isChooseFoodPage, isShow, len);
  return (
    <main className="App">
      <section className="sectionHeader">
        <Header isChooseFoodPage={isChooseFoodPage} />
      </section>
      <section className="sectionButton">
        <Button
          isChooseFoodPage={isChooseFoodPage}
          isShow={isShow}
          len={len}
          handleSelectPage={handleChoosePage}
        />
      </section>

      <section className="sectionList">
        <div className="missionStatement">
          <h3>Mission Statement</h3>
          <p>
            Our products are organic, carefully cultivated and processed with
            the best physical and traditional methods to ensure no or minimum
            loss of minerals and vitamins.
          </p>
        </div>
        <ul className="ulApp">
          <li className="liAppHeading">Item Name - Item Quantity Available</li>,
          {menuItems.map((item) => {
            return (
              <li key={item.id} className="liApp">
                {item.name} - {item.quantity}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="sectionMain">
        <h4 className="foodTitle">Choose from our List of Items</h4>
        {isChooseFoodPage && !isShow && len && (
          <div className="foodMainContainer">
            <form className="search" type="submit">
              <label>Search:</label>
              &nbsp;
              <input
                type="search"
                value={searchTerm}
                placeholder="Search for item"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch
                className="searchIcon"
                role="button"
                // onClick={handleSearchSubmit}
              />
            </form>
            <div className="foodContainer">
              <Foods
                foodItems={menuItems}
                updateQuantity={updateQuantity}
                cart={cart}
                handleCheckout={handleShowCart}
                isShow={isShow}
                handleSelect={handleSelect}
                selectedFood={selectedFood}
                setSelectedFood={() => setSelectedFood("")}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                totalAmount={totalAmount}
                handleShowCart={handleShowCart}
                isChooseFoodPage={isChooseFoodPage}
                name={name}
                setName={setName}
                mobile={mobile}
                setMobile={setMobile}
                setFullName={setFullName}
                setQuantity={setQuantity}
                customerName={customerName}
                len={len}
              />
            </div>
            <button
              className="btn btnShowCart"
              onClick={(e) => handleShowCart(e)}
            >
              Checkout
            </button>
            {len && customerName && <h2>Welcome {customerName}!</h2>}
          </div>
        )}
        {isChooseFoodPage && !isShow && !len && (
          <div className="foodMainContainer">
            <form className="search" type="submit">
              <label>Search:</label>
              &nbsp;
              <input
                type="search"
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch
                className="searchIcon"
                role="button"
                // onClick={handleSearchSubmit}
              />
            </form>
            <div className="foodContainer">
              <Foods
                foodItems={menuItems}
                updateQuantity={updateQuantity}
                cart={cart}
                handleCheckout={handleShowCart}
                isShow={isShow}
                handleSelect={handleSelect}
                selectedFood={selectedFood}
                setSelectedFood={() => setSelectedFood("")}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                totalAmount={totalAmount}
                handleShowCart={handleShowCart}
                isChooseFoodPage={isChooseFoodPage}
                name={name}
                setName={setName}
                mobile={mobile}
                setMobile={setMobile}
                setFullName={setFullName}
                setQuantity={setQuantity}
                customerName={customerName}
                len={len}
              />
            </div>
          </div>
        )}

        {!isChooseFoodPage && isShow && len && (
          <>
            <Cart
              cart={cart}
              handleShowCart={handleShowCart}
              isShow={isShow}
              cartValue={cartValue}
              customermobile={customermobile}
              handleDelete={handleDelete}
              totalAmount={totalAmount}
            />
          </>
        )}
      </section>
    </main>
  );
};
export default App;

// Storage.prototype.setObj = function (key, obj) {
//   return this.setItem(key, JSON.stringify(obj));
// };
// Storage.prototype.getObj = function (key) {
//   return JSON.parse(this.getItem(key));
// };

// let storedNames = localStorage.newMenuItems;

// function updateQuantity(id, quan) {
//   let newMenuItems = [];
//   let cart = [];
//   menuItems.map((item) => {
//     if (item.id === id) {
//       let quantity = item.quantity - quan;
//       newMenuItems.push({ ...item, quantity });

//       cart.push({
//         id: id,
//         name: item.name,
//         price: item.price,
//         quantity: quan,
//       });
//       setCart(cart);
//     } else if (item.id !== id) {
//       newMenuItems.push(item);
//     }
//   });

//   setMenuItems(newMenuItems);
// }
