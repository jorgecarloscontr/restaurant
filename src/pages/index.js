import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../sass/pages/_home.scss';
import Layout from '../components/layout';
import CarouselHeader from '../components/carouselHeader';
import AboutUs from '../components/aboutUs';
import OurConcept from '../components/ourConcept';
import useImageParallax from '../hooks/useParallax';
import CarouselTestimonials from '../components/carouselTestimonials';
import VisitUs from '../components/visitUs';
//import SEO from "../components/seo"

const IndexPage = () => {
  const promotion = useImageParallax();
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <CarouselHeader />
      <OurConcept />
      <AboutUs />
      <CarouselTestimonials />
      {promotion}
      <VisitUs />
    </Layout>
  );
};

export default IndexPage;
