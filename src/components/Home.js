import React, { useEffect, useRef } from 'react';
import utils from './utils';

const Home = () => {
  useEffect(() => {
    utils.setDocTitle('React App Home');
    routeTitle.current.focus();
  });

  const routeTitle = useRef(null);

  return (
    <div>
      <h2 ref={routeTitle} tabIndex="-1">Home</h2>
    </div>
  );
};

export default Home;
