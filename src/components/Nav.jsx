import React from "react";
import Logo from "../images/logo.svg"

function Nav() {
    return (
        <div className='nav'>
           <img src={Logo}/>
           <ul className='nav-menu font-white'>
               <li>Home</li>
               <li>Event & Location</li>
               <li>Story</li>
               <li>RSVP</li>
           </ul>
          
        </div>
    );
}

export default Nav;