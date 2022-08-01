import React,{ useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { GoThreeBars } from 'react-icons/go';
import { useLocation } from 'react-router-dom';


const Navbar = ({ toggle }) => {

 const [nav, setNav] = useState(false);

 const changeBackground = () => {
  if (window.scrollY >= 50) {
   setNav(true);
  }
  else {
   setNav(false);
  }
 }

 window.addEventListener('scroll',changeBackground);

 const location = useLocation();

  useEffect(() => {
    if (window.location.pathname === '/login-register') {
      setNav(true);
    }
    else if (window.location.pathname === '/lagos-homes') {
      setNav(true);
    }
    else if (window.location.pathname === '/SA-homes') {
      setNav(true);
    }
    else if (window.location.pathname === '/Kenya-homes') {
      setNav(true);
    }
    else if (window.location.pathname === '/Ghana-homes') {
      setNav(true);
    }
    else if (window.location.pathname === '/IvoryCoast-homes') {
      setNav(true);
    } else {
      setNav(false)
    }
  }, [location]);

  return (
      <nav className={nav ? 'nav active' : 'nav'}>
         <Link to='/' className='logo'>
          century homes
          </Link>
          <GoThreeBars onClick={toggle} className='menubars'/>
          <ul className='nav-menu'>
            <li><Link to='#about'>About</Link></li>
            <li><Link to='#homes'>Homes</Link></li>
            <li><Link to='#contact'>Contact</Link></li>
          </ul>
          <div className='navBtn'>
            <Link to='/login-register'>Login or Register</Link>
          </div>
      </nav>   
  )
}

export default Navbar