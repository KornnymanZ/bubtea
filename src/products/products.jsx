import './products.css'
import React, { useState, useEffect, useRef } from 'react';
import { useUserProfile } from "../layouts/BaseLayout";


const PAGE_PRODUCTS = 'prod';
const PAGE_CART = 'cart'
const PAGE_CHECK = 'check'

export default function Products() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    const [check, setCheck] = useState(PAGE_CHECK);
    const userProfile = useUserProfile();


    const [count_bubble_tea, setCountBuubleTea] = useState(1)
    const [count_bubble_cock, setCountCock] = useState(1)
    const [count_bubble_balls, setCountBall] = useState(1)
    const [count_bubble_pen, setCountPen] = useState(1)
    const [count_bubble_is, setCountIs] = useState(1)
    const [count_bubble_mike, setCountMike] = useState(1)
    const [count_bubble_boba, setCountBoba] = useState(1)
    const [count_bubble_teeta, setCountTeeta] = useState(1)
    const [count_bubble_bobs, setCountBobs] = useState(1)

    let [topping] = useState([
        {
            name:'Coconut Jelly',
        },
    ])

    let [prod] = useState([
        {
            name: 'Bubble Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Milk Tea',
            cost: '$4.99',
            image: 'https://www.corman.pro/wp-content/uploads/sites/2/recipe/3912/6411a05fbb64e-croissant-dough-retouchee-jpg-scaled.jpg',
            count:1
        },
        {
            name: 'Chai',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Matcha Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Mint Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Lemon Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Boba Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Darjeeling Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
        {
            name: 'Dandelion Tea',
            cost: '$2.99',
            image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
            count:1
        },
    ])



    const updateCount = (prod) => {

        if (prod.name === "Bubble Tea"){

            // Counting bubble tea
            setCountBuubleTea((count) => count + 1)
            prod.count = count_bubble_tea;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Bubble Tea"), { ...prod}]);
        }

        if (prod.name === "Milk Tea"){

            // Counting 
            setCountCock((count) => count + 1)
            prod.count = count_bubble_cock;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Milk Tea"), { ...prod}]);
        }

        if (prod.name === "Chai"){

            // Counting 
            setCountBall((count) => count + 1)
            prod.count = count_bubble_balls;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Chai"), { ...prod}]);
        }
        
        if (prod.name === "Matcha Tea"){

            // Counting 
            setCountPen((count) => count + 1)
            prod.count = count_bubble_pen;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Matcha Tea"), { ...prod}]);
        }

        if (prod.name === "Mint Tea"){

            // Counting 
            setCountIs((count) => count + 1)
            prod.count = count_bubble_is;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Mint Tea"), { ...prod}]);
        }

        if (prod.name === "Lemon Tea"){

            // Counting 
            setCountMike((count) => count + 1)
            prod.count = count_bubble_mike;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Lemon Tea"), { ...prod}]);
        }

        if (prod.name === "Boba Tea"){

            // Counting 
            setCountBoba((count) => count + 1)
            prod.count = count_bubble_boba;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Boba Tea"), { ...prod}]);
        }

        if (prod.name === "Darjeeling Tea"){

            // Counting 
            setCountTeeta((count) => count + 1)
            prod.count = count_bubble_teeta;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Darjeeling Tea"), { ...prod}]);
        }

        if (prod.name === "Dandelion Tea"){

            // Counting 
            setCountBobs((count) => count + 1)
            prod.count = count_bubble_bobs;

            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Dandelion Tea"), { ...prod}]);
        }
    }

    const addToCart = (prod) => {

        setCart([...cart, { ...prod}]);
        console.warn('addToCart')
        
    }

    

    const removeFromCart = (prodToRemove) => {

        if(prodToRemove.name === "Bubble Tea"){
             // Remove all bubble tea
             setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Bubble Tea"));

             // Counting bubble tea
             setCountBuubleTea((count) => 1)
             prod.count = count_bubble_tea;
 
         }
         
         if(prodToRemove.name ===  "Milk Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Milk Tea"));

            // Counting bubble tea
            setCountCock((count) => 1)
            prod.count = count_bubble_cock;

        }

        if(prodToRemove.name === "Chai"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Chai"));

            // Counting bubble tea
            setCountBall((count) => 1)
            prod.count = count_bubble_balls;

        }

        if(prodToRemove.name === "Matcha Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Matcha Tea"));

            // Counting bubble tea
            setCountPen((count) => 1)
            prod.count = count_bubble_pen;

        }

        if(prodToRemove.name === "Mint Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Mint Tea"));

            // Counting bubble tea
            setCountIs((count) => 1)
            prod.count = count_bubble_is;

        }

        if(prodToRemove.name === "Lemon Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Lemon Tea"));

            // Counting bubble tea
            setCountMike((count) => 1)
            prod.count = count_bubble_mike;

        }

        if(prodToRemove.name === "Boba Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Boba Tea"));

            // Counting bubble tea
            setCountBoba((count) => 1)
            prod.count = count_bubble_boba;

        }

        if(prodToRemove.name === "Darjeeling Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Darjeeling Tea"));

            // Counting bubble tea
            setCountTeeta((count) => 1)
            prod.count = count_bubble_teeta;

        }

        if(prodToRemove.name === "Dandelion Tea"){
            // Remove all bubble tea
            setCart(cart.filter((prodToRemove) => prodToRemove.name !== "Dandelion Tea"));

            // Counting bubble tea
            setCountBobs((count) => 1)
            prod.count = count_bubble_bobs;

        }
         
         else
         {
            setCart(
                cart.filter((prod) => prod !== prodToRemove)
              );
         } 
    };

    //this is not done do it Monday ASAP
    const minusItem = (prod) => {
        if (prod.name === "Bubble Tea"){

            if(count_bubble_tea > 0){
            // Counting bubble tea
            setCountBuubleTea((count) => count - 1)
            prod.count = count_bubble_tea;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Bubble Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Milk Tea"){
            if(count_bubble_cock > 0){
            // Counting 
            setCountCock((count) => count - 1)
            prod.count = count_bubble_cock;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Milk Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Chai"){
            if(count_bubble_balls > 0){
            // Counting 
            setCountBall((count) => count - 1)
            prod.count = count_bubble_balls;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Chai"), { ...prod}]);
            }
        }
        
        if (prod.name === "Matcha Tea"){
            if(count_bubble_pen > 0){
            // Counting 
            setCountPen((count) => count - 1)
            prod.count = count_bubble_pen;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Matcha Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Mint Tea"){
            if(count_bubble_is > 0){
            // Counting 
            setCountIs((count) => count - 1)
            prod.count = count_bubble_is;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Mint Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Lemon Tea"){
            if(count_bubble_mike > 0){
            // Counting 
            setCountMike((count) => count - 1)
            prod.count = count_bubble_mike;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Lemon Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Boba Tea"){
            if(count_bubble_tea > 0){
            // Counting 
            setCountBoba((count) => count - 1)
            prod.count = count_bubble_boba;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Boba Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Darjeeling Tea"){
            if(count_bubble_teeta > 0){
            // Counting 
            setCountTeeta((count) => count - 1)
            prod.count = count_bubble_teeta;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Darjeeling Tea"), { ...prod}]);
            }
        }

        if (prod.name === "Dandelion Tea"){
            if(count_bubble_bobs > 0){
            // Counting 
            setCountBobs((count) => count - 1)
            prod.count = count_bubble_bobs;
            }else{
            // Remove all bubble tea and add new one
            setCart([...cart.filter((prod) => prod.name !== "Dandelion Tea"), { ...prod}]);
            }
        }
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage)
    };

    const renderProducts = () => (
        <>
            <header>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
                <button onClick={() => navigateTo(PAGE_CART)}><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" /> {cart.length} Items </button>
                {/* <button onClick={() => navigateTo(PAGE_CHECK)}>Check Out</button>   */}
            </header>
            <div className="product">
            {prod.map((prod, idx) => (
                <div className = "prod" key={idx}>
                <h1>{prod.name}</h1>
                <h2>{prod.cost}</h2>
                <img src={prod.image} alt={prod.name}/>
                <button2 class="button2" onClick={() => updateCount(prod)}>Add to cart</button2>
                
            </div>
            ))}
        </div>
        </>
    );

    

    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    //   }
      
    //   // Close the dropdown if the user clicks outside of it
    //   window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //       var dropdowns = document.getElementsByClassName("dropdown-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }

    function favTutorial() {
        var mylist = document.getElementById("myList");
        document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
        }
    

    const renderCart = () => (
        <>
            <header>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
                <button onClick={() => navigateTo(PAGE_CART)}><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" /> {cart.length} Items</button>
                <button onClick={() => navigateTo(PAGE_CHECK)}>Check Out</button>  
            </header>
            
            <h5>Cart
            {/* <button onClick={() => navigateTo(PAGE_CHECK)}>Check Out</button>  */}
            </h5>
            <div1 className="product">
            {cart.map((prod, idx) => (
                <div className = "prod" key={idx}>
                <h1>{prod.name}</h1>
                <h2>{prod.cost}</h2>
                <img src={prod.image} alt={prod.name}/>
                <select id = "myList" onchange = "favTutorial()" >
                    <option> Select Topping </option>
                    <option> Grass Jelly </option>
                    <option> Coconut Jelly </option>
                    <option> Aloe </option>
                    <option> Egg Pudding </option>
                </select>
                <input type = "text" placeholder='Notes'></input>
                <h6>{prod.count} items</h6>
                
                {/* add button */}
                <button onClick={() => updateCount(prod)}>+</button> 
                <button onClick={() => removeFromCart(prod)}>Remove</button>    
                {/* minus button to be worked on */}
                <button onClick={() => minusItem(prod)}>-</button> 
            </div>
            ))}
        </div1>
        </>
    );

    const renderCheck = () => (
        <>
            <h1>Thank you for Ordering</h1>
            <h3>
                <a href="/home">Return Home</a>
            </h3>
            <div className="product">
            {cart.map((prod, idx) => (
                <div className = "prod" key={idx}>
                <h1>{prod.name}</h1>
                <h1>{prod.count} Items</h1>
                <h2>{prod.cost}</h2>
                <img src={prod.image} alt={prod.name}/>
                {/* <p> Your selected tutorial site is: 
                <input type = "text" id = "favourite" size = "20"></input> </p> */}
            </div>
            ))}
        </div>
        </>
    );

    return (
        <div className="products">
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
            {page === PAGE_CHECK && renderCheck()}
        </div>
    )
}