import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import BackgroundImage from 'gatsby-background-image';

import '../sass/components/_carouselHeader.scss';
import useCarouselHeader from '../hooks/useCarouselHeader';
import Button from './button';

const carouselHeader = () => {
  const items = useCarouselHeader();

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <BackgroundImage
          tag="imageheader"
          fluid={item.multiBackground}
          fadeIn="soft"
          className={`carousel__backgroundImage carousel__backgroundImage--${item.key}`}
        >
          <div className="carousel__backgroundImage__container">
            <div className="carousel__backgroundImage__content">
              <div className={`overflow--${item.key}-title u-mb-medium`}>
                <h1>{item.title}</h1>
              </div>
              {item.description.length > 0 ? (
                <div
                  className={`overflow--${item.key}-description u-mb-medium`}
                >
                  <p className="carousel__description">{item.description}</p>
                </div>
              ) : null}
              <div className={`overflow--${item.key}-button`}>
                <Button
                  className="button__header"
                  text={item.textButton}
                  type="transparent"
                  url={item.key === 'headerMenu' ? '/menu' : '/'}
                />
              </div>
            </div>
          </div>
        </BackgroundImage>
      </CarouselItem>
    );
  });
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
      className="carousel"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        className="carousel__indicators"
      />
      {slides}
    </Carousel>
  );
};

export default carouselHeader;
