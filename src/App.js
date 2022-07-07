/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Theme from './component/Theme';
import ProdList from './component/ProdList';
import Pagination from './common/Pagination';
import onlineData from './feature';
import { getUrl } from './utils';
import './App.scss';

const App = () => {
  const [themeData, setThemeData] = useState({});
  const [prodData, setProdData] = useState({});
  const [max, setMax] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { Link, Img } = onlineData[0];
    const hashList = [];
    const prodList = [];
    // eslint-disable-next-line no-plusplus
    for (let idx = 1; idx <= 5; ++idx) {
      hashList?.push({
        id: idx,
        name: onlineData?.[idx]?.Link?.Text,
        href: getUrl(onlineData?.[idx]?.ExtraData?.ElementType, onlineData?.[idx]?.Link?.Url),
      });
    }
    setThemeData({
      themeName: Link?.Text2, background: Link?.Background, pic: { imgSrc: Img?.Src, imgAlt: Img?.Text }, hashList,
    });
    // eslint-disable-next-line no-plusplus
    for (let idx = 6; idx < onlineData?.length; ++idx) {
      prodList?.push({
        id: idx - 5,
        name: onlineData?.[idx]?.Link?.Text,
        price: Number(onlineData?.[idx]?.Link?.Text1),
        imgSrc: `//cs-a.ecimg.tw${onlineData?.[idx]?.Img?.Src}`,
        imgAlt: onlineData?.[idx]?.Link?.Text,
        href: getUrl(onlineData?.[idx]?.ExtraData?.ElementType, onlineData?.[idx]?.Link?.Url),
      });
    }
    setProdData({ arrProd: prodList });
  }, [onlineData]);

  useEffect(() => {
    if (prodData?.arrProd?.length) {
      setMax(Math.ceil(prodData.arrProd.length / 6));
    }
  }, [prodData?.arrProd]);

  return (
    <div className="window-border">
      <Theme {...themeData} />
      <div className="window-prod">
        <ProdList arrProd={prodData?.arrProd} page={page} />
        <Pagination maximum={max} current={page} atPageSelect={setPage} />
      </div>
    </div>
  );
};

export default App;
