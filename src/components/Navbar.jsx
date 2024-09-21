import './components.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import whitelogo from "../assets/imagefolder/homestyler.jpg";
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

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
            <Link to ="/"><li>Home</li></Link>
            <Link to ="/findprofessionals"><li>Find professionals</li></Link>
            <Link  to="/product" className='li'><li>Products</li></Link>
            <Link to ="/Feedback"><li>Feedback</li></Link>
            <Link to ="/about"><li>about</li></Link>
            <Link to ="/contact"><li>contact</li></Link>
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
