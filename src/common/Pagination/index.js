import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Pagination = (props) => {
  const { current, maximum, atPageSelect } = props;

  const handleClick = (select) => {
    if (select === 'left' && current > 1) {
      atPageSelect(current - 1);
    } else if (select === 'right' && current < maximum) {
      atPageSelect(current + 1);
    }
  };

  const atButton = (select, opacity) => (
    <button type="button" className="arrow-outside" onClick={() => handleClick(select, maximum)}>
      <div className={`arrow-border-${select}`} style={{ opacity: opacity === false ? 1 : 0 }}>
        <div className={`arrow-${select}`} />
      </div>
    </button>
  );

  return (
    <div className="prod-pagination">
      {atButton('left', current === 1)}
      {`${current}  /  ${maximum}`}
      {atButton('right', current === maximum)}
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  maximum: PropTypes.number,
  atPageSelect: PropTypes.func,
};

Pagination.defaultProps = {
  current: null,
  maximum: null,
  atPageSelect: null,
};

export default Pagination;
