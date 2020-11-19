import React from 'react';

import { LogoIcon } from '../../../svg/LogoIcon';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <footer className="container mx-auto py-16 px-3 text-gray-800">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <div className="logo-icon">
            <LogoIcon />
          </div>
          <div className="logo-description">
            <div className="f-logo-title">Update Studios</div>
            <div className="f-logo-subtitle">The Multimedia Hub</div>
          </div>
          {/* <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p> */}
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://codebushi.com">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="https://codebushi.com">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://dev.to/changoman">Dev.to</a>
            </li>
            <li>
              <a href="https://twitter.com/HuntaroSan">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
