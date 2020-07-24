import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { css } from '@emotion/core';

const MapReact = () => {
  const position = [20.673613, -103.363651];
  const isClient = typeof window !== 'undefined';

  return (
    <div
      className="map"
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      {isClient && (
        <Map
          center={position}
          zoom={20}
          css={css`
            width: 100%;
            height: 100%;
            border-radius: 5px;
          `}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      )}
    </div>
  );
};

export default MapReact;
