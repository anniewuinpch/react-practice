import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Pagination = (props) => {
  const { current, maximum } = props;
  return (
    <div className="prod-pagination">
      <i className="arrow-left" />
      {`${current}  /  ${maximum}`}
      <i className="arrow-right" />
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  maximum: PropTypes.number,
};

Pagination.defaultProps = {
  current: 1,
  maximum: null,
};

export default Pagination;
