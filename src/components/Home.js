import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import utils from './utils';

const Home = ({ openModal, triggerRef }) => {
  const routeTitle = useRef(null);
  useEffect(() => {
    utils.setDocTitle('React App Home');
    routeTitle.current.focus();
  }, []);

  return (
    <>
      <div>
        <h1 ref={routeTitle} tabIndex="-1">
          Home
        </h1>
        <button ref={triggerRef} className="launch-video" onClick={openModal} aria-haspopup="modal" aria-controls="modal">
          <img src="https://i.ytimg.com/vi/Z4j5rJQMdOU/hqdefault.jpg" alt="Watch the Test Pattern video"/>
        </button>
      </div>
    </>
  );
};

export default Home;
