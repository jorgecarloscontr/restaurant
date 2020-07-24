import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import IconDrink from '../images/assets/drink.svg';
import IconFood from '../images/assets/spoon-knife.svg';

const cardPromos = ({ name, description, image, promos }) => {
  console.log(promos);
  return (
    <div className="promos__card">
      {/* font slide */}
      <div className="promos__card__side promos__card__front">
        <div className="promos__card__front__info">
          <h4>{name}</h4>
          <p>{description}</p>
          <div>
            <IconDrink className="promos__card__icon promos__card__icon--drink" />
            <IconFood className="promos__card__icon promos__card__icon--food" />
          </div>
        </div>
        <div className="promos__card__front__image">
          <BackgroundImage
            tag="image--promo"
            fluid={image.sharp.fluid}
            fadeIn="soft"
            className="promos__card__front__img"
          ></BackgroundImage>
        </div>
      </div>
      {/* back slide */}
      <div className="promos__card__side promos__card__back">
        <ul>
          {promos.length !== 0 ? (
            promos.map(el => (
              <li key={`${el.name}-${el.id}`} className="promos__card__promo">
                <span>{el.id}:</span> {el.name}
              </li>
            ))
          ) : (
            <p className="promos__card__without-promo">No available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default cardPromos;
