import React, { useEffect, useRef } from 'react';
import utils from './utils';

const About = () => {

  useEffect(() => {
    utils.setDocTitle('React App About');
    routeTitle.current.focus();
  });

  const routeTitle = useRef(null);

  return (
    <div>
      <h2 ref={routeTitle} tabIndex="-1">About</h2>
    </div>
  );
};

export default About;
