import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import DataSetCreationForm from './DataSetCreationForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 400,
  bgcolor: 'background.paper'
};

export default function DataSetCreateModal({ open, handleClose, modalClickHandler, dataset }) {
  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Box sx={style}>
          <DataSetCreationForm
            handleClose={handleClose}
            modalClickHandler={modalClickHandler}
            dataSet={dataset}
          />
        </Box>
      </Modal>
    </>
  );
}

DataSetCreateModal.propTypes = {
  open: PropTypes.func,
  handleClose: PropTypes.func,
  modalClickHandler: PropTypes.func,
  dataset: PropTypes.object
};
