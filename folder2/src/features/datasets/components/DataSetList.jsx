import React, { useEffect, useState } from 'react';
// import { Grid, List, ListItem, Pagination, Stack } from '@mui/material';
import { Grid, Pagination, Snackbar, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import DataSetCreateModal from './DataSetCreateModal';
import DataSetService from 'services/dataset.service';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import DataSetCardList from './DataSetCardList';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from 'react-hook-form';
import MuiAlert from '@mui/material/Alert';
import DataSetConfirmDeleteModal from './DataSetConfirmDeleteModal';

const DEAFULT_DATA_SETS_PER_PAGE = 8;
export const DataSetList = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [dataSetData, setDataSetData] = useState(null);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [allDataSets, setAllDataSets] = useState([]);
  const [numberOfTotalPages, setNumberOfTotalPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const [isDataSetCreated, setIsDataSetCreated] = useState(false);
  const [isDataSetUpdated, setIsDataSetUpdated] = useState(false);
  const [isDataSetDeleted, setIsDataSetDeleted] = useState(false);
  const [isDataSetCreationFailed, setIsDataSetCreationFailed] = useState(false);
  const [isDataSetUpdateFailed, setIsDataSetUpdateFailed] = useState(false);
  const [isDataSetDeletionFailed, setIsDataSetDeletionFailed] = useState(false);

  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // PageStartIndex
    const postData = {
      RequestControl: {
        RequestID: uuidv4(),
        RequesterName: 'Sujith',
        RequesterLanguage: 'en',
        PageStartIndex: currentPageNumber,
        PagePerLoad: DEAFULT_DATA_SETS_PER_PAGE
      }
    };
    setOpenBackdrop(true);
    DataSetService.getAll(postData)
      .then((response) => {
        console.log(response.data);
        setAllDataSets({ ...response.data });
        setOpenBackdrop(false);
        const totalNumberOfPages = Math.ceil(
          response.data.ResponseControl.TotalCount / response.data.ResponseControl.PagePerLoad
        );
        setNumberOfTotalPages(totalNumberOfPages);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPageNumber, isDataSetCreated, isDataSetUpdated, isDataSetDeleted]);

  const handleView = (dataSetId) => {
    console.info('View dataSetId: ', dataSetId);
    history.push(`/datasets/${dataSetId}`);
  };
  // const handleClosebackdrop = () => {};
  const handleEdit = async (dataSetId) => {
    console.info('Edit dataSetId: ', dataSetId);
    setOpen(true);
    setOpenDeleteModal(false);
    const postData = {
      RequestControl: {
        RequestID: uuidv4(),
        RequesterName: 'Sujith',
        RequesterLanguage: 'en'
      },
      TWINReferenceDataSet: {
        Name: '',
        ID: dataSetId
      }
    };
    const dataSetContent = await DataSetService.get(postData);
    console.info('dataSetContent: ', dataSetContent);
    setDataSetData({ ...dataSetContent.data.TWINReferenceDataSet });
  };

  const handleDelete = async (dataSetId) => {
    console.info('Delete dataSetId: ', dataSetId);
    setOpenDeleteModal(true);
    setOpen(false);
    const postData = {
      RequestControl: {
        RequestID: uuidv4(),
        RequesterName: 'Sujith',
        RequesterLanguage: 'en'
      },
      TWINReferenceDataSet: {
        Name: '',
        ID: dataSetId
      }
    };
    const dataSetContent = await DataSetService.get(postData);
    console.info('dataSetContent: ', dataSetContent);
    setDataSetData({ ...dataSetContent.data.TWINReferenceDataSet });
  };
  const handleOpen = () => {
    setOpen(true);
    setDataSetData(null);
    // reset();
  };
  const handleClose = () => {
    setOpen(false);
    setOpenDeleteModal(false);
  };
  const pageChangeHandler = (e, pageNumber) => {
    console.info('e, pageNumber: ', e, pageNumber);
    if (pageNumber !== currentPageNumber) {
      setCurrentPageNumber(pageNumber);
    }
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const getSuccessMessage = () => {
    let message = '';

    if (isDataSetCreated) {
      message = `Data set created successfully!`;
    } else if (isDataSetUpdated) {
      message = `Data set updated successfully!`;
    } else if (isDataSetDeleted) {
      message = `Data set deleted successfully!`;
    }
    return message;
  };
  const getErrorMessage = () => {
    let message = '';
    if (isDataSetCreationFailed) {
      message = errorMessage
        ? `Data set  creation failed due to following reason:`
        : `Data set  creation failed. Please try again.`;
    } else if (isDataSetUpdateFailed) {
      message = errorMessage
        ? `Data set update failed due to following reason:`
        : `Data set update failed. Please try again.`;
    } else if (isDataSetDeletionFailed) {
      message = errorMessage
        ? `Data set deletion failed due to following reason:!`
        : `Data set deletion failed. Please try again.`;
    }
    return (
      <>
        {message}
        <Typography>{`${errorMessage}`}</Typography>
      </>
    );
  };
  const createDataSet = (data) => {
    const postData = {
      RequestControl: {
        RequestID: uuidv4(),
        RequesterName: 'Sujith',
        RequesterLanguage: 'en'
      },
      TWINReferenceDataSet: data
    };
    console.log('Form post Data: ', JSON.stringify(postData, null, 2));
    DataSetService.create(postData)
      .then((response) => {
        console.log(response.data);
        setOpenSuccess(true);
        setIsDataSetCreated(true);
        setIsDataSetUpdated(false);
        setIsDataSetDeleted(false);
      })
      .catch((e) => {
        console.log('data set creation error: ', JSON.stringify(e.response, null, 2));
        setOpenError(true);
        setIsDataSetCreationFailed(true);
        setIsDataSetUpdateFailed(false);
        setIsDataSetDeletionFailed(false);
        setErrorMessage(e.response.data.ErrorMessage);
      })
      .finally(() => {
        handleClose();
      });
  };
  const updateDataSet = (data) => {
    if (dataSetData) {
      const putData = {
        RequestControl: {
          RequestID: uuidv4(),
          RequesterName: 'Sujith',
          RequesterLanguage: 'en'
        },
        TWINReferenceDataSet: data
      };
      DataSetService.update(putData)
        .then((response) => {
          console.log(response.data);
          setOpenSuccess(true);
          setIsDataSetUpdated(true);
          setIsDataSetCreated(false);
          setIsDataSetDeleted(false);
        })
        .catch((e) => {
          console.log('data set creation error: ', JSON.stringify(e.response, null, 2));
          setOpenError(true);
          setIsDataSetUpdateFailed(true);
          setIsDataSetDeletionFailed(false);
          setIsDataSetCreationFailed(false);
          setErrorMessage(e.response.data.ErrorMessage);
        })
        .finally(() => {
          handleClose();
        });
    }
  };
  const deleteDataSet = (data) => {
    console.info('here deletion api needs to be integrated: ', data);

    // success
    // setOpenSuccess(true);
    // setIsDataSetDeleted(true);
    // error
    setOpenError(true);
    setIsDataSetDeletionFailed(true);
    setErrorMessage('');
    handleClose();
  };

  const modalClickHandler = (operation, data) => {
    switch (operation) {
      case 'create':
        createDataSet(data);
        break;
      case 'update':
        updateDataSet(data);
        break;
      case 'delete':
        deleteDataSet(data);
        break;
      default:
        setOpen(false);
    }
  };
  return (
    <>
      <Box>
        <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
            {getSuccessMessage()}
          </Alert>
        </Snackbar>
        <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
          <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
            {getErrorMessage()}
          </Alert>
        </Snackbar>
        <Grid container justifyContent={'space-between'} alignItems={'space-between'}>
          <Grid item xs={12} alignItems={'center'}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Typography variant={'h6'}>{'List of Data sets'}</Typography>
              <Button
                variant="contained"
                primary
                startIcon={<AddOutlinedIcon />}
                sx={{ ml: '25px' }}
                onClick={handleOpen}>
                Add Data Set
              </Button>
            </Grid>
            <Divider />
            <Grid container justifyContent={'center'} alignItems={'center'} mt={2}>
              <Stack spacing={2}></Stack>
              <Pagination
                onChange={pageChangeHandler}
                count={numberOfTotalPages}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {allDataSets && allDataSets.TWINReferenceDataSets && (
        <Box mt={2}>
          <DataSetCardList
            dataSets={allDataSets.TWINReferenceDataSets}
            handleView={handleView}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Box>
      )}

      <Box>
        <DataSetCreateModal
          open={open}
          handleClose={handleClose}
          modalClickHandler={modalClickHandler}
          dataset={dataSetData}
        />
      </Box>
      <Box>
        <DataSetConfirmDeleteModal
          open={openDeleteModal}
          handleClose={handleClose}
          modalClickHandler={modalClickHandler}
          dataset={dataSetData}
        />
      </Box>
    </>
  );
};

export default DataSetList;
