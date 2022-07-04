import React from 'react';
import PropTypes from 'prop-types';
import ProdInfo from '../../common/ProdInfo';
import arrayChunk from '../../utils';
import './index.scss';

const PROD_COUNT = 6;

const ProdList = (props) => {
  const { arrProd } = props;
  const renderListItem = (prodList) => <div className="prod-list">{prodList?.map((objProd) => <ProdInfo {...objProd} key={objProd?.id} />)}</div>;
  const renderProdList = (prodList) => arrayChunk(prodList, 3)?.map((arrProdList) => renderListItem(arrProdList));
  return (
    <div className="prod">
      {arrayChunk(arrProd, PROD_COUNT)?.map((arrList) => renderProdList(arrList))}
    </div>
  );
};

ProdList.propTypes = {
  arrProd: PropTypes.array,
};

ProdList.defaultProps = {
  arrProd: [],
};

export default ProdList;
