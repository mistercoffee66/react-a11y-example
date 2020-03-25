import React, { useLayoutEffect, useRef } from 'react';

const VideoModal = ({ closeModal }) => {
  const modal = useRef(null);
  const overlay = useRef(null);
  const closeButton = useRef(null);

  const tabableEls = [];

  const keyHandler = e => {
    console.log(e);
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'Tab') {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    closeButton.current.focus();
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  useLayoutEffect(() => {
    modal.current.querySelectorAll('a, button, *[tabIndex]').forEach(el => tabableEls.push(el));
  }, []);

  return (
    <div ref={overlay} className="overlay">
      <div id="modal" ref={modal} aria-labelledby="modal-title">
        <button ref={closeButton} onClick={closeModal}>
          <span className="visually-hidden">Close</span>
          <span aria-hidden={true}>X</span>
        </button>
        <h1 id="modal-title">This is my video</h1>
        <a href="">some link</a>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Z4j5rJQMdOU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
