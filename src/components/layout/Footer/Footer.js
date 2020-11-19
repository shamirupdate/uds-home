import React from 'react';

import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
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
          <h2 className="text-lg font-semibold">Contact</h2>
          <ul className="mt-4 leading-loose">
            <li>
              Mobile: 9940760786
            </li>
            <li>
              <a href="mailto:shamir@updatestudios.com" rel="noopener" class="icons" aria-label="Mail">shamir@updatestudios.com</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a className="social-link" href="https://www.instagram.com/updatestudios/"><FaInstagram /> #updatestudios</a>
            </li>
            <li>
              <a className="social-link" href="https://www.facebook.com/updatestudios/"><FaFacebookSquare /> updatestudios</a>
            </li>
            <li>
              <a className="social-link" href="https://twitter.com/Shamir_uds"><FaTwitter /> @Shamir_uds</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
