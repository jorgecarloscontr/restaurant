import React from 'react';
import Image from 'gatsby-image';
import useAboutUS from '../hooks/useAboutUS';

const AboutUs = () => {
  const {
    title,
    description,
    imageSmall,
    imageMedium,
    imageLarge,
  } = useAboutUS();

  return (
    <section className="aboutUs">
      <div className="aboutUs__details">
        <h2 className="u-mb-medium">About US</h2>
        <h3 className="u-mb-medium">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="aboutUs__images">
        <Image
          fluid={imageLarge.sharp.fluid}
          className="aboutUs__img aboutUs__img--large"
        />
        <Image
          fluid={imageMedium.sharp.fluid}
          className="aboutUs__img aboutUs__img--medium"
        />
        <Image
          fluid={imageSmall.sharp.fluid}
          className="aboutUs__img aboutUs__img--small"
        />
      </div>
    </section>
  );
};

export default AboutUs;
