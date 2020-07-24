import { graphql, useStaticQuery } from 'gatsby';

const useCarouselHeader = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: strapiAboutUs {
        title
        description
        imageSmall {
          sharp: childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageLarge {
          sharp: childImageSharp {
            fluid(
              maxWidth: 1200
              duotone: { highlight: "#02EBF8", shadow: "#192550" }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageMedium {
          sharp: childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useCarouselHeader;
