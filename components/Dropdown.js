import React, { useState } from "react";


function Dropdown( {nav} ) {
    const [dropdown, setDropdown] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
  
    return (
      <>
        <ul
          className={dropdown ? "projects-submenu clicked" : "projects-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >

          {nav.map((item) => {

              if(item.extendCheck){
                  
                return (
                  <li key={item.id} onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}>
                      <a
                      href={item.url}
                      className="submenu-item"                 
                      >
                      {item.title}
                      </a>
                      
                  </li>           
                );
              }
              
              return (
              <li key={item.id}>
                  <a
                  href={item.url}
                  className="submenu-item"
                  onClick={() => setDropdown(false)}
                  >
                  {item.title}
                  </a>
                  
              </li>           
              );
            

          })}
        </ul>
      </>
    );
  }
  
  export default Dropdown;