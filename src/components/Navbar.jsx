import './components.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import whitelogo from "../assets/imagefolder/homestyler.jpg";
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header');
      if (window.scrollY > 200) {
        navbar.classList.add('change-bg-color');
      } else {
        navbar.classList.remove('change-bg-color');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='navbarHolder'>
        <div className='navlogo'>
          <img src={whitelogo} alt="logo" />
        </div>
        <div className={`linksHolder ${menuOpen ? 'active' : ''}`}>
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

        <div className='hamburger' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
