import React from 'react';
import useOurConcept from '../hooks/useOurConcept';
import Image from 'gatsby-image';
import Button from '../components/button';

const AboutUs = () => {
  const { description, img1, img2, img3 } = useOurConcept();

  return (
    <section className="our-concept">
      <h2 className="u-mb-medium ">Our Food Concept</h2>
      <div className="our-concept__container">
        <div className="our-concept__images">
          <Image
            fluid={img1.sharp.fluid}
            className="our-concept__img our-concept__img--1"
          />
          <Image
            fluid={img2.sharp.fluid}
            className="our-concept__img our-concept__img--2"
          />
          <Image
            fluid={img3.sharp.fluid}
            className="our-concept__img our-concept__img--3"
          />
        </div>
        <div className="our-concept__details">
          <h3 className="u-mb-medium">Mexican Food</h3>

          <p className="u-mb-medium">{description}</p>
          <Button text="View menu" type="primary" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
