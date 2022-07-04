import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const HashTag = (props) => {
  const { id, name, href } = props;

  return (
    <li className="hashTag-list">
      <a href={href} key={id} className="hashTag-text">{`# ${name}`}</a>
    </li>
  );
};

HashTag.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  href: PropTypes.string,
};

HashTag.defaultProps = {
  id: null,
  name: '',
  href: '',
};

export default HashTag;
