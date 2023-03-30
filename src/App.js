import React from 'react';
import './App.css';
import cart from './images/cart.png'
import logo from './images/icon.webp'

const Header = () =>(
  <div className="header">
    <a href='index.html'><img className = "logo" src={logo} alt='logo'/></a>
    <div className='search-bar'>
      <input className = "search-area" type = "text" placeholder='Enter text here'></input>
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


const Body = () => (
  <div className='body'>

  </div>
)

 function App() {
  return (
    <>
      <Header />
      <Body />
    </>

  )
}





export default App;
