import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import '../sass/components/_button.scss';

const Button = ({ text, url, type }) => {
  return (
    <Link to={`${url}`} className={`button button--${type}`}>
      {text}
    </Link>
  );
};

Button.defaultProps = {
  url: '/',
  text: 'Button',
};

Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
