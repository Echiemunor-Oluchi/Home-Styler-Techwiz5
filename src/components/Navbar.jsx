import './components.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import whitelogo from "../assets/imagefolder/whitehomestylerlogo.jpg"
import { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.header');
      if (window.scrollY > 200) {
        navbar.classList.add('.change-bg-color');
     }
  })
  }, [window.scrollY])
  return (
    <div className='header'>
      <div className='navbarHolder'>
      <div className='navlogo'>
        <img src={whitelogo} alt="" />
      </div>
      <div className='linksHolder'>
        <ul>
          <li>Home</li>
          <li>Design styles</li>
          <li>Find professionals</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div className='navIcons'>
      <FaShoppingCart />
      <IoPersonSharp />
      </div>
      
      <div className='hamburger'>
      <GiHamburgerMenu className='hamburger' />
      </div>
      </div>
    </div>
  )
}

export default Navbar