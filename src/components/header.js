import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';

const Header = ({ title, image, description }) => {
  return (
    <header className="u-mb-big">
      <BackgroundImage
        tag="imageheader"
        fluid={image}
        fadeIn="soft"
        css={css`
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1 className="u-mb-medium">{title} </h1>
        <p
          css={css`
            font-size: 2.5rem;
            width: 50%;
            color: white;
            text-align: center;

            @media only screen and (max-width: 51.56em) {
              width: 80%;
            }
          `}
        >
          <span
            css={css`
              padding: 1rem 1.5rem;
              background-image: linear-gradient(
                to right bottom,
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.6)
              );
              -webkit-box-decoration-break: clone;
              box-decoration-break: clone;
              line-height: 2;
            `}
          >
            {description}
          </span>
        </p>
      </BackgroundImage>
    </header>
  );
};

export default Header;
