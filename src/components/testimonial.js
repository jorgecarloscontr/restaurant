import React from 'react';

import Icon from '../images/assets/star.svg';
import Image from 'gatsby-image';

const Testimonial = ({ data: { name, date, description, image, score } }) => {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(
      <Icon
        key={`star--${i}`}
        className={`testimonial__star testimonial__star--${
          i < score ? 'positive' : 'negative'
        }`}
      />
    );
  }

  return (
    <div className="testimonial">
      <div className="testimonial__stars">{stars}</div>
      <p className="testimonial__description">{description}</p>
      <div className="testimonial__profile">
        <Image
          fluid={image.sharp.fluid}
          className="testimonial__profile__image"
        />
        <p className="testimonial__profile__name">{name}</p>
        <p className="testimonial__profile__date">{date}</p>
      </div>
    </div>
  );
};

export default Testimonial;
