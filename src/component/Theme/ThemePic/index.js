import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ThemePic = (props) => {
  const { imgSrc, imgAlt, imgHref } = props;
  return (
    <div className="window-pic">
      <img src={imgSrc} alt={imgAlt} href={imgHref} />
    </div>
  );
};

ThemePic.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgHref: PropTypes.string,
};

ThemePic.defaultProps = {
  imgSrc: '',
  imgAlt: '',
  imgHref: '',
};

export default ThemePic;
