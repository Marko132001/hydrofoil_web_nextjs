import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hydrofoil_logo from '../images/hydrofoil_logo.png';
import Dropdown from './Dropdown';
import Link from 'next/link';

const Logo = () => {
  return <Image
          className="logo" 
          src = {hydrofoil_logo}
          alt = "hydrofoil logo"
          width="112px"
          height="100px"
          />
}



function NavBar( {navItems} ) {


  const [navBar, setNavBar] = React.useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 20) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);


  const [dropdown, setDropdown] = React.useState(false);


  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <>
      <nav className={navBar ? 'navbar active' : 'navbar'}>
        <Link href="/" className="navbar-logo">
          <h3 className="title">Adria<span className="subword">Hydrofoil</span></h3>
        </Link>
        <ul className={`nav-items ${isOpen && "open"}`}>
          {navItems.data.map((item) => {
            if (item.attributes.title === "Projects") {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={item.attributes.url}>{item.attributes.title}</a>
                  {dropdown && <Dropdown nav={item.attributes.submenu}/>}
                </li>
              );
            }
            
            
            return (
              <li key={item.id} className="nav-item">
                <a href={item.attributes.url}>{item.attributes.title}</a>
              </li>
            );
            

          })}
        </ul>
        <div className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
        <Logo />
      </nav>
    </>
  );


    


}

export default NavBar;

