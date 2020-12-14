import React from 'react';

import { FaInstagram, FaTwitter, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { LogoIcon } from '../../../svg/LogoIcon';
import { SiGmail } from 'react-icons/si';
import './Footer.css';


const Footer = () => (
  <div className="footer-container">
    <footer className="container mx-auto py-8 lg:py-16 px-3 text-gray-800">
      <div className="flex-1 -mx-3 px-6">
        <div className="flex-1 px-3">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Social Media</h2>
          <ul className="mt-2 leading-loose mb-4 media-link">
            <li className="insta-icon-grp">
              <a className="icons social-link text-sm sm:text-base lg:text-lg" href="https://www.instagram.com/updatestudios/" 
                target="_blank"><FaInstagram class="instaIcon"/> #updatestudios</a>
            </li>
            <li className="fb-icon-grp">
              <a className="icons social-link text-sm sm:text-base lg:text-lg" href="https://www.facebook.com/updatestudios/"
                target="_blank"><FaFacebookSquare class="fbIcon"/> updatestudios</a>
            </li>
            <li className="twitter-icon-grp">
              <a className="icons social-link text-sm sm:text-base lg:text-lg" href="https://twitter.com/Shamir_uds"
                target="_blank"><FaTwitter class="twitterIcon"/> @shamir_uds</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Contact</h2>
          <ul className="mt-2 leading-loose">
            <li className="mobile-icon-grp">
              <a href="tel:9940-760-786" class="icons mobile text-sm sm:text-base lg:text-lg"
                target="_blank"><FaPhoneAlt class="mobileIcon"/> 9940-760-786</a>
            </li>
            <li className="email-icon-grp">
              <a href="mailto:shamir@updatestudios.com" class="icons email text-sm sm:text-base lg:text-lg" 
                rel="noopener" aria-label="Mail" target="_blank"><SiGmail class="emailIcon"/> shamir@updatestudios.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex -mx-3 mt-10">
          <div className="logo-wrapper">
            <div className="logo-icon">
              <LogoIcon />
            </div>
            <div className="logo-description">
              <div className="f-logo-title text-xl sm:2xl lg:text-3xl">Update Studios</div>
              <div className="f-logo-subtitle text-xs sm:text-sm lg:text-base">The Multimedia Hub</div>
            </div>
          </div>
      </div>
    </footer>
  </div>
);

export default Footer;
