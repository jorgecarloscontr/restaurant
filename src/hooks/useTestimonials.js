import { graphql, useStaticQuery } from 'gatsby';

const useTestimonials = () => {
  const {
    data: { nodes },
  } = useStaticQuery(graphql`
    query {
      data: allStrapiTestimonials {
        nodes: nodes {
          id
          name
          description
          date
          score
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return nodes;
};

export default useTestimonials;
