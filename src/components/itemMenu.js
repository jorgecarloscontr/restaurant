import React from 'react';
import Image from 'gatsby-image';
// import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const ItemMenu = ({ category, setDataModal, setModal, setModalTitle }) => {
  const { name, description, image, dishes } = category;

  const showModal = () => {
    setDataModal(dishes);
    setModal(true);
    setModalTitle(name);
  };
  return (
    <div className="menu__item" onClick={showModal}>
      <div className="menu__item__info">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <Image fluid={image.sharp.fluid} className="menu__item__image" />
      {/* <div className="menu__item__background"></div> */}
    </div>
  );
};

export default ItemMenu;
