import { graphql, useStaticQuery } from 'gatsby';

const useCarouselHeader = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: strapiCarouselHeader {
        titleMain
        titleMenu
        titleReservation
        descriptionMenu
        descriptionReservation
        imageMain {
          sharp: childImageSharp {
            fluid(
              maxWidth: 1500
              duotone: { highlight: "#222222", shadow: "#192550", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageMenu {
          sharp: childImageSharp {
            fluid(
              maxWidth: 1500
              duotone: { highlight: "#222222", shadow: "#192550", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageReservation {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
      }
    }
  `);
  const items = [
    {
      image: data.imageMain,
      title: data.titleMain,
      description: '',
      textButton: 'Reserve your table',
      multiBackground: [
        'linear-gradient(to right bottom, rgba(0,0,0,.5), rgba(0,0,0,.2))',
        data.imageMain.sharp.fluid,
      ],
      key: 'headerMain',
    },
    {
      image: data.imageMenu,
      title: data.titleMenu,
      description: data.descriptionMenu,
      textButton: 'View menu',
      multiBackground: [
        'linear-gradient(to left, rgba(0,0,0,.8) 20%, rgba(0,0,0,.2))',
        'linear-gradient(to left bottom, rgba(0,0,0,.4), rgba(0,0,0,.2))',
        data.imageMenu.sharp.fluid,
      ],
      key: 'headerMenu',
    },
    {
      image: data.imageReservation,
      title: data.titleReservation,
      description: data.descriptionReservation,
      textButton: 'Reserve',
      multiBackground: [
        'linear-gradient(to right, rgba(0,0,0,.8) 20%, rgba(0,0,0,.2))',
        'linear-gradient(to right bottom, rgba(0,0,0,.4), rgba(0,0,0,.2))',
        data.imageReservation.sharp.fluid,
      ],
      key: 'headerReservation',
    },
  ];

  return items;
};

export default useCarouselHeader;
