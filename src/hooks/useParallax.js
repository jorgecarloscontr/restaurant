import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../components/button';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Div = styled.div`
  position: relative;
  height: 60rem;
  @media only screen and (max-width: 37.5em) {
    height: 50rem;
  }
`;

const ImageParallax = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const useParallax = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: strapiImageParallax {
        title
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const multiBackground = [
    'linear-gradient(to right bottom, rgba(0,0,0,.9), transparent)',
    data.image.sharp.fluid,
  ];
  return (
    <Div>
      <ImageParallax tag="imageparallax" fluid={multiBackground} fadeIn="soft">
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          `}
        >
          <h1
            className="u-mb-medium"
            css={css`
              @media only screen and (max-width: 37.5em) {
                font-size: 3rem;
                text-align: center;
              }
            `}
          >
            {data.title}
          </h1>
          <Button url="promos" text="Promotions" type="transparent" />
        </div>
      </ImageParallax>
    </Div>
  );
};

export default useParallax;
