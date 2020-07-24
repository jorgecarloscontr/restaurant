import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CardPromos from './cardPromos';

const Promos = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allStrapiPromos {
        nodes {
          id
          name
          description
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          promos {
            id,
            name
          }
        }
      }
    }
  `);
  return (
    <section className="promos">
      <div className="promos__content">
        {data.nodes.map(el => (
          <CardPromos
            key={el.id}
            name={el.name}
            description={el.description}
            image={el.image}
            promos={el.promos}
          />
        ))}
      </div>
    </section>
  );
};

export default Promos;
