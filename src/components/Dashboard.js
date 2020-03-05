import React, { useEffect, useRef } from 'react';
import utils from './utils';

const Dashboard = () => {

  useEffect(() => {
    utils.setDocTitle('React App Dashboard');
    routeTitle.current.focus();
  });

  const routeTitle = useRef(null);

  return (
    <div>
      <h2 ref={routeTitle} tabIndex="-1">Dashboard</h2>
    </div>
  );
};

export default Dashboard;
