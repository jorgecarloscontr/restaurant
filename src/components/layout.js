import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from './navigation';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
