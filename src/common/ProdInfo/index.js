import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ProdInfo = (props) => {
  const {
    id, name, price, imgSrc, imgAlt, href,
  } = props;
  return (
    <ul className="prod-info" key={id}>
      <img className="prod-img" src={imgSrc} alt={imgAlt} href={href} />
      <li className="prod-name">{name}</li>
      <li className="prod-price">{`$${price}`}</li>
    </ul>
  );
};

ProdInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  href: PropTypes.string,
};

ProdInfo.defaultProps = {
  id: null,
  name: '',
  price: null,
  imgSrc: '',
  imgAlt: '',
  href: '',
};

export default ProdInfo;
