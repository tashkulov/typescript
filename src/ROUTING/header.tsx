import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
            
                  <li><Link to="/">Main</Link></li>  
                  <li><Link to="/about-us">About us</Link></li>  
                  <li> <Link to="/contact">Contact</Link></li> 
            </ul>
        </div>
    );
};

export default Header;