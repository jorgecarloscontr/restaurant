import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Gallery = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allStrapiGalleries {
        nodes {
          id
          image {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  var images = [];
  data.nodes.forEach(el => {
    images.push(el.image.sharp.fluid.src);
  });

  const [openLightBox, setOpenLightBox] = useState(false);
  const [imageIndes, setImageIndex] = useState(0);

  return (
    <section className="gallery">
      <h2>gallery</h2>
      <div className="gallery__content">
        {data.nodes.map((el, index) => (
          <div
            key={el.id}
            className={`gallery__div--${el.id}`}
            onClick={() => {
              setOpenLightBox(true);
              setImageIndex(index);
            }}
          >
            <Image fluid={el.image.sharp.fluid} className={'gallery__image'} />
          </div>
        ))}
        {openLightBox && (
          <Lightbox
            mainSrc={images[imageIndes]}
            nextSrc={images[(imageIndes + 1) % images.length]}
            prevSrc={images[(imageIndes + images.length - 1) % images.length]}
            onCloseRequest={() => setOpenLightBox(false)}
            onMovePrevRequest={() =>
              setImageIndex((imageIndes + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setImageIndex((imageIndes + 1) % images.length)
            }
            css={css`
              z-index: 4000;
            `}
            className="gallery__modal"
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
