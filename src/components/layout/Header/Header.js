import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BsList, BsX } from 'react-icons/bs';

import { LogoIcon } from '../../../svg/LogoIcon';
import './Header.css';


function Header(){
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = ev => {
    ev.preventDefault();
    const el = document.getElementById("nav");
    el.classList.toggle("block");
    el.classList.toggle("hidden");
    setMenuActive(!menuActive);
  };

  return (
    <header className="sm:sticky top-0 bg-white shadow header-container">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
        <div className="flex items-center text-2xl">
          <div className="logo-full mr-3">
            <LogoIcon />
          </div>
          <div className="logo-description">
            <div className="logo-title">Update Studios</div>
          </div>
        </div>
        
        <button
          className="flex lg:hidden items-center rounded burger-menu"
          onClick={handleClick}
          style={{ outline: "none" }}     // override non-compliant styles
        >
          {!menuActive && <BsList />}
          {menuActive && <BsX />}
        </button>

        <div className="hidden lg:block flex flex-col sm:flex-row mt-4 sm:mt-0">
          <AnchorLink className="px-4 py-2 link" href="#voice-recording">
            Recording
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#sound-effects">
            SFX
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#video-editing">
            Editing
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#color-grading">
            Color Grading
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#green-matte-studio">
            Green Matte
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#preview-theatre">
            Theatre
          </AnchorLink>
        </div>
      </div>
      <div className="hidden lg:hidden flex flex-col sm:flex-row mt-4 ml-8 sm:mt-0 justify-center" id="nav">
          <AnchorLink className="px-4 py-2 link" href="#voice-recording">
            Recording
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#sound-effects">
            SFX
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#video-editing">
            Editing
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#color-grading">
            Color Grading
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#green-matte-studio">
            Green Matte
          </AnchorLink>
          <AnchorLink className="px-4 py-2 link" href="#preview-theatre">
            Theatre
          </AnchorLink>
        </div>
    </header>
  )
}

export default Header;
