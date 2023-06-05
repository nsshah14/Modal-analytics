import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalHeader from './ModalHeader';
import * as d3 from "d3";
import { customModalStyles } from '../styles/ModalStyle';
import LC from './Chart';
import HierarchicalBarChart from './HierarchicalBarChart';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    d3.json("./flare-2.json").then(data => setData(data));
  }, []); // Run only once

  const handleAfterOpen = () => {
    setModalOpen(true);
  };

  const dynamicModalStyles = {
    content:{
      ...customModalStyles.content,
      transform: modalOpen ? 'translateX(0)' : 'translateX(100%)',
    },
    overlay:{
      ...customModalStyles.overlay,
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={handleAfterOpen}
      onRequestClose={onRequestClose}
      style={dynamicModalStyles}
      >
        <ModalHeader title="Analytics"></ModalHeader>
        <div style={{width:'550px', padding: "30px"}}>
          {data ? (
              <HierarchicalBarChart data={data}></HierarchicalBarChart> 
          ) : (
            <div>Loading data</div>
          )}
        </div>
    </Modal>
  );
};

export default CustomModal;
