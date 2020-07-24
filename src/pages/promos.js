import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import '../sass/pages/_promos.scss';
import Layout from '../components/layout';
import Header from '../components/header';
import VisitUs from '../components/visitUs';
import Promos from '../components/promos';

const PromosPage = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allStrapiPages(filter: { title: { eq: "Promos" } }) {
        nodes {
          title
          description
          image {
            sharp: childImageSharp {
              fluid(
                maxWidth: 1500
                duotone: {
                  highlight: "#222222"
                  shadow: "#192550"
                  opacity: 30
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const page = data.nodes[0];
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Header
        title={page.title}
        description={page.description}
        image={page.image.sharp.fluid}
      />
      <Promos />
      <VisitUs />
    </Layout>
  );
};

export default PromosPage;
