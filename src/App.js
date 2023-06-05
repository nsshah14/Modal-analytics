import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import * as d3 from "d3";
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div> 
  );
};

export default App;
