import React, { useState, useEffect } from 'react';
import Theme from './component/Theme';
import Prod from './component/Prod';
import Pagination from './common/Pagination';
import fakeData from './feature';
import './App.scss';

const App = () => {
  const [data] = useState(fakeData);
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(Math.ceil(data.arrProd.length / 6));
  }, [data?.arrProd]);

  return (
    <div className="window-border">
      <Theme {...data} />
      <div className="window-prod">
        <Prod arrProd={data?.arrProd} />
        <Pagination maximum={page} />
      </div>
    </div>
  );
};

export default App;
