import React from 'react';
import { Link } from 'gatsby';
import IconFacebook from '../images/assets/facebook.svg';
import IconTwitter from '../images/assets/tumblr.svg';
import IconInstagram from '../images/assets/instagram.svg';
import IconGoogle from '../images/assets/google.svg';
import IconLocationPin from '../images/assets/location-pin.svg';
import IconMail from '../images/assets/mail.svg';
import IconPhone from '../images/assets/old-mobile.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column">
            <h4>Restaurant Home Page</h4>
            <p>
              Nam tincidunt velit in velit pulvinar congue. Etiam at maximus
              lacus. Maecenas convallis tellus vel arcu auctor consequat.
              Praesent at euismod ligula. Suspendisse in purus tincidunt,
              dapibus dui vel, pharetra enim.
            </p>
          </div>
          <div className="footer__column">
            <h4>About</h4>
            <ul className="footer__links">
              <Link to="/" className="footer__link">
                Menu
              </Link>
              <Link to="/" className="footer__link">
                Places
              </Link>
              <Link to="/" className="footer__link">
                Promos
              </Link>
              <Link to="/" className="footer__link">
                Reservation
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Follow</h4>
            <ul className="footer__links">
              <Link to="/" className="footer__link">
                <IconFacebook className="footer__icon" /> Facebook
              </Link>
              <Link to="/" className="footer__link">
                <IconTwitter className="footer__icon" /> Twitter
              </Link>
              <Link to="/" className="footer__link">
                <IconInstagram className="footer__icon" /> Instagram
              </Link>
              <Link to="/" className="footer__link">
                <IconGoogle className="footer__icon" /> Google+
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Contact</h4>
            <ul className="footer__column__list">
              <li>
                <IconLocationPin className="footer__icon" />
                Av. America #233
              </li>
              <li>
                <IconMail className="footer__icon" />
                suppor@restaurant.com
              </li>
              <li>
                <IconPhone className="footer__icon" />
                (33) 19363327
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; copyright 2020 by Jorge Carlos.
      </div>
    </footer>
  );
};

export default Footer;
