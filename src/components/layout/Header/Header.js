import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import LogoIcon from '../../../svg/LogoIcon';
import Button from '../../Button';
import './Header.css';

const Header = () => (
  <header className="sticky top-0 bg-white shadow header-container">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex items-center text-2xl">
        <div className="logo-full mr-3">
          <LogoIcon />
        </div>
        <div className="logo-description">
          <div className="logo-title">Update Studios</div>
          {/* <div className="logo-subtitle">The Multimedia Hub</div> */}
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
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
  </header>
);

export default Header;
