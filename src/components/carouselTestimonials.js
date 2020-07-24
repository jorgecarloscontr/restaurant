import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/core';
import Testimonial from './Testimonial';
import useDataTestimonials from '../hooks/useTestimonials';

const carouseTestimonials = () => {
  const testimonials = useDataTestimonials();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: testimonials.lenght < 4 ? testimonials.lenght : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      css={css`
        width: 100%;
        margin: 10rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h2 className="u-mb-medium">Testimonials</h2>
      <div
        css={css`
          margin: 0 auto;
          width: 90%;
          max-width: 150rem;
          @media only screen and (max-width: 62.5em) {
            .testimonial {
              width: 40rem;
              max-width: none;
            }
          }
          @media only screen and (max-width: 51.25em) {
            .testimonial {
              width: 70%;
              max-width: none;
            }
          }
        `}
      >
        <Slider {...settings}>
          {testimonials.map(test => (
            <Testimonial data={test} key={test.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default carouseTestimonials;
