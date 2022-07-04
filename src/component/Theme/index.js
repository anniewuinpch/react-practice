import React from 'react';
import PropTypes from 'prop-types';
import ThemePic from './ThemePic';
import HashTag from '../../common/HashTag';
import './index.scss';

function Theme(props) {
  const {
    themeName, hashList, background, pic,
  } = props;

  const renderThemeHash = (arrhashList) => {
    if (arrhashList?.length > 0) {
      return (
        <ul className="theme-hashTag">
          {arrhashList?.map((data) => <HashTag {...data} />)}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="theme-tab" style={{ background }}>
      <div className="theme-contain">
        <div className="theme-tag">
          <span className="theme-tag-name">主題推薦</span>
        </div>
        <div className="theme-title">
          <h1>{themeName}</h1>
        </div>
        <div className="theme-hash">
          {renderThemeHash(hashList)}
        </div>
      </div>
      <ThemePic {...pic} />
    </div>
  );
}

Theme.propTypes = {
  themeName: PropTypes.string,
  hashList: PropTypes.array,
  background: PropTypes.string,
  pic: PropTypes.object,
};

Theme.defaultProps = {
  themeName: '',
  hashList: [],
  background: '',
  pic: {
    imgSrc: '',
    imgAlt: '',
    imgHref: '',
  },
};

export default Theme;
