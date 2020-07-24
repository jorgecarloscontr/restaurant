import React from 'react';
import MapReact from './mapReact';

const VisitUs = () => {
  return (
    <section className="visit-us">
      <h2 className="u-mb-medium">Visit US</h2>

      <div className="visit-us__container">
        <div className="visit-us__info">
          <h3>Hours of Operation</h3>
          <div className="visit-us__info__schedule">
            <div className="visit-us__info__schedule__day">
              <p>Mon-Fri</p>
              <p>10:00am - 1:00pm</p>
              <p>4:00pm - 10:30pm</p>
            </div>
            <div className="visit-us__info__schedule__day">
              <p>Mon-Fri</p>
              <p>12:00am - 4:00pm</p>
              <p>7:00pm - 1:30am</p>
            </div>
            <div className="visit-us__info__schedule__day">
              <p>Sunday</p>
              <p>4 - 1:30pm</p>
            </div>
          </div>
          <div className="visit-us__info__address">
            <p>Av. Mexico</p>
            <p>Guadalarajara Jalisco</p>
            <p>(33) 19693327</p>
          </div>
        </div>
        <div className="visit-us__map">
          <MapReact />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
