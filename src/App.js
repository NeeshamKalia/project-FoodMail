import React from 'react';
import './App.css';
import cart from './images/cart.png'
import logo from './images/icon.webp'
import restaurantpic from "./images/restaurant.jpeg"

const Header = () =>(
  <div className="header">
    <a href='index.html'><img className = "logo" src={logo} alt='logo'/></a>
    <div className='search-bar'>
      <input className = "search-area" type = "text" placeholder='     Enter text here..'></input>
      <button type='Submit'>Search</button>
    </div>
    <div className='right-header'>
      <nav >
        <ul className='header-nav'>
          <li> <a href = "index.html">Home</a></li>
          <li> <a href = "index.html">About</a></li>
          <li> <a href = "index.html">Contact</a></li>
        </ul>
      </nav>
      <a href='index.html'><img className="cart-logo" src = {cart} alt='cart' /></a>
    </div>
  </div>
)
/* -----body-------- */
const burgerKing = {
  image: "url",
  name: "Burger King",
  cuisines: ["Chinese", "Italian",],
  rating: 4.2,
  distance: 0.9
}

const Restaurant = () => (
  <div className='card-container'>
    <img className='card-pic' src={restaurantpic} alt='restaurant' />
    <div id = "restaurant-name">
    <h3>{burgerKing.name}</h3>
    </div>
    <h4>{(burgerKing.cuisines).join(", ")}</h4>
    <div className='restaurant-info'>
      <h5>{burgerKing.rating} Stars</h5>
      <h5>{burgerKing.distance}KM away</h5>
    </div>
  </div>
)

/*

----hard coding the component-----
 const Restaurant = () => (
  <div className='card-container'>
    <img className='card-pic' src={restaurantpic} alt='restaurant' />
    <div id = "restaurant-name">
    <h3>Khalsa Dhaba</h3>
    </div>
    <h4>Punjabi, Chinese</h4>
    <div className='restaurant-info'>
      <h5>0.7 Stars</h5>
      <h5>0.5KM away</h5>
    </div>
  </div>
) */
const Body = () =>(
  <div className='body'>
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
  </div>
)

const Footer = () => (
  <footer>
    <nav className="footer-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </nav>
    <div className="copy">
      <p>&copy;copyright. All Rights Reserved.</p>
    </div>
  </footer>
)


 function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>

  )
}





export default App;
