import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Navigation = () => {
  const [scrollX, setScrollX] = useState(false);

  const { data } = useStaticQuery(graphql`
    query {
      data: strapiLogo {
        image: logoImage {
          sharp: childImageSharp {
            fixed(width: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        caption
      }
    }
  `);

  const handleScroll = () => {
    if (window.scrollY > 55) setScrollX(true);
    else setScrollX(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className={`navigation ${
        scrollX === false ? 'navigation--transparent' : 'navigation--dark'
      } `}
    >
      <div className="navigation__container">
        <Link to="/" className="navigation__title">
          {data.caption}
        </Link>
        <div className="navigation__nav">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"></span>
          </label>
          <div className="navigation__background">&nbsp;</div>

          <div className="navigation__list">
            <Link
              to="/menu"
              activeClassName="navigation__link--current"
              className="navigation__link"
            >
              Home
            </Link>
            <Link
              to="/menu"
              activeClassName="navigation__link--current"
              className="navigation__link"
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              activeClassName="navigation__link--current"
              className="navigation__link"
            >
              Gallery
            </Link>
            <Link
              to="/promos"
              activeClassName="navigation__link--current"
              className="navigation__link"
            >
              Promos
            </Link>
            <Link
              to="/reservation"
              activeClassName="navigation__link--current"
              className="navigation__link"
            >
              Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
