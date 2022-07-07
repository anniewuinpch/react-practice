import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProdInfo from '../../common/ProdInfo';
import { arrayChunk } from '../../utils';
import './index.scss';

const PROD_COUNT = 6;

const ProdList = (props) => {
  const { arrProd, page } = props;
  const [prodData, setProdData] = useState();

  useEffect(() => {
    setProdData(arrayChunk(arrProd, PROD_COUNT)?.map((arrProdList) => arrayChunk(arrProdList, 3)));
  }, [arrProd]);

  const renderListItem = (prodList, index) => <div className="prod-list" key={`prod-list-${index}`}>{prodList?.map((objProd) => <ProdInfo {...objProd} key={`${objProd?.id}-${objProd?.name}`} />)}</div>;

  return (
    <div className="prod">
      {prodData?.[page - 1]?.map((arrList, index) => renderListItem(arrList, index))}
    </div>
  );
};

ProdList.propTypes = {
  arrProd: PropTypes.array,
  page: PropTypes.number,
};

ProdList.defaultProps = {
  arrProd: [],
  page: null,
};

export default ProdList;
