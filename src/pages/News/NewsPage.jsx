import Background3 from "../../background3/background3"
import Products from "../../products/products"
import Banner from "../../Banner/Banner"
import axios from 'axios';
import { useState, useEffect } from 'react';
import './NewsPage.css';

const PAGE_PRODUCTS = 'prod';
const PAGE_CART = 'cart';
const PAGE_CHECK = 'check';
const calculateTotalCost = (cart, menus) => {
  if (cart.length === 0) {
    return 0;
  }

  let totalCost = 0;

  cart.forEach((item) => {
    const menu = menus.find((menu) => menu.Id === item.id);
    totalCost += menu.price * item.quantity;
  });

  return totalCost;
};
const renderCart = (cart, menus, deleteFromCart) => {
  const totalCost = calculateTotalCost(cart, menus);


  return (
    <div className="cart">
      <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
      <ul>
        {cart.map((item) => {
          const menu = menus.find((menu) => menu.Id === item.id);
          return (
            <li key={menu.Id}>
              {menu.name} x {item.quantity} - ${menu.price} each
              <button onClick={() => deleteFromCart(item.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default function NewsPage() {
  const [page, setPage] = useState([]);
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [newMenuName, setNewMenuName] = useState('');
  const [newMenuPrice, setNewMenuPrice] = useState('');
  const [newMenuCategory, setNewMenuCategory] = useState('');
  const [newMenuImage, setNewMenuImage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [newToppingName, setNewToppingName] = useState('');
  const [newToppingPrice, setNewToppingPrice] = useState('');
  

  const fetchProduct = async () => {
    const response = await axios.get(
      'https://bubble-tea-cafe-api-production.up.railway.app/api/menu'
    );
    const menus_data = response.data;
    setMenus(menus_data.data);
    // console.log(menus_data.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

const fetchToppings = async () => {
  try{
    const response = await axios.get('https://bubble-tea-cafe-api-production.up.railway.app/api/topping');

    const topping_data = response.data;
    setToppings(topping_data.data);
    // console.log(topping_data.data);
  } catch (error) {
    console.error('Error fetching toppings:', error.response.data.message);
  }
};

  useEffect(() => {
    fetchToppings();
  }, [])

  const getToken = () => {
    return window.localStorage.getItem('token');
  };

  function postProductToCartTemp(menuId, toppingId) {
    if (cart.filter((product) => product.id === menuId).length > 0) {
      // Case existing product
      let product_quantity = cart.filter((product) => product.id === menuId)[0].quantity;
      let new_quantity = product_quantity + 1;

      // Remove existing item
      setCart([
        ...cart.filter((product) => product.id !== menuId),
        { id: menuId, quantity: new_quantity },
      ]);
    } else {
      // Case new product
      setCart([...cart, { id: menuId, quantity: 1 }]);
    }

    console.log(cart);
  }

  const submitOrder = async () => {
    const token = getToken();
  
    if (!token) {
      console.error('No token found in local storage.');
      return;
    }
  
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    try {
      const response = await axios.post(
        'https://bubble-tea-cafe-api-production.up.railway.app/api/order',
        {
          // customerId: user_id,
          menuItems: cart.map((item) => ({
            menuId: item.id,
            user_id: item.user_id,
            quantity: item.quantity,
            price: calculateTotalCost,
          })),
          totalPrice: totalPrice,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
  
      console.log('Order submitted:', response.data);
  
      // Optionally, you can clear the cart after successful order submission
      setCart([]);
    } catch (error) {
      if (error.response) {
        console.error('Error submitting order:', error.response.data.message);
      } else {
        console.error('Error submitting order:', error.message);
      }
    }
  };
  const calculateTotalCost = (cart, menus) => {
    let totalCost = 0;
  
    cart.forEach((item) => {
      const menu = menus.find((menu) => menu.Id === item.id);
      totalCost += menu.price * item.quantity;
    });
  
    return totalCost;
  };
  const createMenu = async () => {
    const token = getToken();

    if (!token) {
      console.error('No token found in local storage.');
      return;
    }

    try {
      const response = await axios.post(
        'https://bubble-tea-cafe-api-production.up.railway.app/api/menu',
        {
          name: newMenuName,
          price: parseFloat(newMenuPrice),
          category: newMenuCategory,
          image: newMenuImage,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log('Menu created:', response.data.data);

      // Refetch the updated menu list
      fetchProduct();

      // Reset the form
      setNewMenuName('');
      setNewMenuPrice('');
      setNewMenuCategory('');
      setNewMenuImage('');

    } catch (error) {
      console.error('Error creating menu:', error.response.data.message);
    }
  };
  const deleteMenu = async (menuId) => {
    const token = getToken();
  
    if (!token) {
      console.error('No token found in local storage.');
      return;
    }
  
    try {
      await axios.delete(`https://bubble-tea-cafe-api-production.up.railway.app/api/menu/${menuId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      console.log('Menu deleted:', menuId);
  
      
      fetchProduct();
  
    } catch (error) {
      console.error('Error deleting menu:', error.response.data.message);
    }
  };
  const deleteFromCart = (menuId) => {
    setCart(cart.filter((item) => item.id !== menuId));
  };
  const createTopping = async () => {
    const token = getToken();
  
    if (!token) {
      console.error('No token found in local storage.');
      return;
    }
  
    try {
      const response = await axios.post(
        'https://bubble-tea-cafe-api-production.up.railway.app/api/topping',
        {
          name: newToppingName,
          price: parseFloat(newToppingPrice),
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
  
      console.log('Topping created:', response.data.data);
  
      // Refetch the updated toppings list
      fetchToppings();
  
      // Reset the form
      setNewToppingName('');
      setNewToppingPrice('');
  
    } catch (error) {
      console.error('Error creating topping:', error.response.data.message);
    }
  };
  const deleteTopping = async (toppingId) => {
    const token = getToken();
    console.log(toppingId);
    if (!token) {
      console.error('No token found in local storage.');
      return;
    }
  
    try {
      await axios.delete(`https://bubble-tea-cafe-api-production.up.railway.app/api/topping/${toppingId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      console.log('Topping deleted:', toppingId);
      fetchToppings();
  
    } catch (error) {
      console.error('Error deleting topping:', error.response.data.message);
    }
  };
  return (
    
    <div className="bgimg3">
      <div className="bar"></div>
      <button4 onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Hide Cart' : 'Show Cart'} ({cart.length} items)
      </button4>
      <button3 onClick={submitOrder}>Place Order</button3>
      <div className="form">
        <label>
          Image URL:
          <input
            type="text"
            value={newMenuImage}
            onChange={(e) => setNewMenuImage(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={newMenuName}
            onChange={(e) => setNewMenuName(e.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={newMenuCategory}
            onChange={(e) => setNewMenuCategory(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={newMenuPrice}
            onChange={(e) => setNewMenuPrice(e.target.value)}
          />
        </label>
        <label>
    Topping Name:
    <input
      type="text"
      value={newToppingName}
      onChange={(e) => setNewToppingName(e.target.value)}
    />
  </label>
  <label>
    Topping Price:
    <input
      type="number"
      step="0.01"
      value={newToppingPrice}
      onChange={(e) => setNewToppingPrice(e.target.value)}
    />
  </label>
  <button3 onClick={createTopping}>create topping</button3>
        <button3 onClick={createMenu}>create menu</button3>
      </div>

<select
  onChange={(event) => {
    if (event.target.value !== "none") {
      const selectedToppingId = event.target.value;
      deleteTopping(selectedToppingId).then(() => {
        event.target.value = "none";
      });
    }
  }}
>
  <option value="none" selected disabled hidden>
    Select a topping to delete
  </option>
  {toppings.map((topping) => (
    <option key={topping.id} value={topping.Id}>
      {topping.name}, {topping.price}
    </option>
  ))}
</select>
      {showCart && renderCart(cart, menus, deleteFromCart)}
      <div className="grid">
      
        {menus.map((menu) => (
          <article key={menu.Id}>
            <img src={menu.image} alt="Sample photo" />
            <div className="text">
              <h3>{menu.name}</h3>
              <p>{menu.category}, {menu.price}</p>
              <select>
                {toppings.map((topping) => (
                <option key={topping.id}>{topping.name}, {topping.price}</option>
                ))}
              </select>
              <button onClick={() => postProductToCartTemp(menu.Id)}>
                Add to Cart
              </button>
              <button onClick={() => deleteMenu(menu.Id)}>
        delete
      </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}