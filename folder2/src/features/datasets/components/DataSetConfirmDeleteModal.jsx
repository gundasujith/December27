import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StyledForm } from './styled';
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 200,
  bgcolor: 'background.paper'
};

export default function DataSetConfirmDeleteModal({
  open,
  handleClose,
  modalClickHandler,
  dataset
}) {
  const { handleSubmit } = useForm({
    defaultValues: { dataSetName: '', dataSetDescription: '' },
    mode: 'onChange'
  });
  const onSubmit = (data) => {
    const TWINReferenceDataSet = {
      Name: data.dataSetName,
      State: 'Draft',
      Description: data.dataSetDescription
    };
    if (dataset.ID) {
      TWINReferenceDataSet.ID = dataset.ID;
      modalClickHandler('delete', TWINReferenceDataSet);
    }
  };
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
          <Typography variant={'h6'} textAlign="center">
            Do you really want to delete the Data Set?
          </Typography>
          <Typography variant={'subtitle1'} textAlign="center" sx={{ color: '#ff6f00' }}>
            Note: You will loose all the data like data attributes, data values related to this
            DataSet {dataset ? `: ${dataset.Name}` : '.'}
          </Typography>
          <Divider />
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ margin: '20px 50px', paddingLeft: '130px' }}>
              <Button
                color="success"
                variant="contained"
                onClick={handleClose}
                sx={{ padding: '10px 40px' }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ marginLeft: '20px', padding: '10px 40px' }}>
                Confirm Delete
              </Button>
            </Box>
          </StyledForm>
        </Box>
      </Modal>
    </>
  );
}

DataSetConfirmDeleteModal.propTypes = {
  open: PropTypes.func,
  handleClose: PropTypes.func,
  modalClickHandler: PropTypes.func,
  dataset: PropTypes.object
};
