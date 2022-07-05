import React, { useState, useEffect } from 'react';
import Theme from './component/Theme';
import ProdList from './component/ProdList';
import Pagination from './common/Pagination';
import fakeData from './feature';
import './App.scss';

const App = () => {
  const [data] = useState(fakeData);
  const [max, setMax] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setMax(Math.ceil(data.arrProd.length / 6));
  }, [data?.arrProd]);

  return (
    <div className="window-border">
      <Theme {...data} />
      <div className="window-prod">
        <ProdList arrProd={data?.arrProd} page={page} />
        <Pagination maximum={max} current={page} atPageSelect={setPage} />
      </div>
    </div>
  );
};

export default App;
