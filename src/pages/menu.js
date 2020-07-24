import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import '../sass/pages/_menu.scss';
import Layout from '../components/layout';
import Header from '../components/header';
import Menu from '../components/menu';
import VisitUs from '../components/visitUs';

//import SEO from "../components/seo"

const IndexPage = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allStrapiPages(filter: { title: { eq: "Menu" } }) {
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
      <Menu />
      <VisitUs />
    </Layout>
  );
};

export default IndexPage;
