import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import BackgroundImage from 'gatsby-background-image';

import CategoryMenu from './itemMenu';

const Menu = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allStrapiCategoriesMenus {
        nodes {
          id
          name
          description
          image: Image {
            sharp: childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          dishes {
            id
            name
            price
            description
          }
        }
      }
    }
  `);

  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [dataModal, setDataModal] = useState([]);

  const toggle = () => setModal(!modal);

  return (
    <section className="menu u-mb-big">
      <h2 className="u-mb-medium">Our menu</h2>
      <div className="menu__container">
        <div className="menu__content">
          {data.nodes.map(el => (
            <CategoryMenu
              key={el.id}
              category={el}
              setDataModal={setDataModal}
              setModal={setModal}
              setModalTitle={setModalTitle}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modal}
        fade={false}
        toggle={toggle}
        className="menu__modal"
        zIndex={3000}
        size="lg"
        centered={true}
      >
        <ModalHeader toggle={toggle} className="menu__modal__header">
          {modalTitle}
        </ModalHeader>
        <ModalBody>
          <ul className="menu__modal__dishes">
            {dataModal.map(el => (
              <li className="menu__modal__dish" key={`${el.id}__modal`}>
                <div className="menu__modal__dish__title">
                  <span className="menu__modal__dish__name">{el.name}</span>
                  <span className="menu__modal__dish__dots"></span>
                  <span className="menu__modal__dish__price">{`$ ${el.price}`}</span>
                </div>
                <span className="menu__modal__dish__description">
                  {el.description}
                </span>
              </li>
            ))}
          </ul>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default Menu;
