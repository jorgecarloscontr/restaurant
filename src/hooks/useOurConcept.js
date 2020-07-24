import { graphql, useStaticQuery } from 'gatsby';

const useOurConcept = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: strapiOurConcept {
        description
        img1 {
          sharp: childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img2 {
          sharp: childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img3 {
          sharp: childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useOurConcept;
