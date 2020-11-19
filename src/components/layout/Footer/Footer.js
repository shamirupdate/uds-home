import React from 'react';

import { FaInstagram, FaTwitter, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { LogoIcon } from '../../../svg/LogoIcon';
import { SiGmail } from 'react-icons/si';
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
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-2 leading-loose mb-4 media-link">
            <li>
              <a className="icons social-link" href="https://www.instagram.com/updatestudios/" 
                target="_blank"><FaInstagram class="instaIcon"/> #updatestudios</a>
            </li>
            <li>
              <a className="icons social-link" href="https://www.facebook.com/updatestudios/"
                target="_blank"><FaFacebookSquare class="fbIcon"/> updatestudios</a>
            </li>
            <li>
              <a className="icons social-link" href="https://twitter.com/Shamir_uds"
                target="_blank"><FaTwitter class="twitterIcon"/> @Shamir_uds</a>
            </li>
          </ul>
          <h2 className="text-lg font-semibold">Contact</h2>
          <ul className="mt-2 leading-loose">
            <li>
              <a href="tel:9940-760-786" class="icons mobile"
                target="_blank"><FaPhoneAlt class="mobileIcon"/> 9940-760-786</a>
            </li>
            <li>
              <a href="mailto:shamir@updatestudios.com" rel="noopener" class="icons email" aria-label="Mail"
                target="_blank"><SiGmail class="emailIcon"/> shamir@updatestudios.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
