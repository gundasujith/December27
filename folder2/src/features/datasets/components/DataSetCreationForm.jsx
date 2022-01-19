import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { StyledForm } from './styled';

const DataSetCreationForm = ({ handleClose, modalClickHandler, dataSet }) => {
  const { handleSubmit, control, setValue, formState } = useForm({
    defaultValues: { dataSetName: '', dataSetDescription: '' },
    mode: 'onChange'
  });

  // const [dataSetName, setDataSetName] = useState('');
  // const [dataSetDescription, setDataSetDescription] = useState('');
  const [dataSetid, setDataSetid] = useState(null);
  const [submitButtonLabel, setSubmitButtonLabel] = useState('Create');
  const [formHeaderLabel, setFormHeaderLabel] = useState('Create a Data Set');

  useEffect(() => {
    console.info('dataSet: ', dataSet);
    if (dataSet) {
      setSubmitButtonLabel('Update');
      setFormHeaderLabel('Update the Data Set');
      // setDataSetName(dataSet.Name);
      setValue('dataSetName', dataSet.Name);
      // setDataSetDescription(dataSet.Description);
      setValue('dataSetDescription', dataSet.Description);
      setDataSetid(dataSet.ID);
      // reset({ dataSetName: dataSet.Name, dataSetDescription: dataSet.Description });
    }
  }, [dataSet]);
  const onSubmit = (data) => {
    const TWINReferenceDataSet = {
      Name: data.dataSetName,
      State: 'Draft',
      Description: data.dataSetDescription
    };
    if (dataSetid) {
      TWINReferenceDataSet.ID = dataSetid;
      modalClickHandler('update', TWINReferenceDataSet);
    } else {
      modalClickHandler('create', TWINReferenceDataSet);
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
  const isSubmitButtonDisabled = () => {
    const formValues = getValues();
    let isDisabled = !(formState.isValid && formState.isDirty);
    if (formState.isDirty && formValues.dataSetName) {
      isDisabled = false;
    }
    return isDisabled;
  };

  return (
    <>
      <Box>
        <Typography variant={'h5'} textAlign="center">
          {formHeaderLabel}
        </Typography>
        <Divider />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="dataSetName"
            control={control}
            // defaultValue={dataSetName}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="DataSet Name"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'DataSet name required' }}
          />
          <Controller
            name="dataSetDescription"
            control={control}
            // defaultValue={dataSetDescription}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="DataSet Description"
                multiline
                rows={5}
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{}}
          />
          <Box sx={{ margin: '20px 50px 20px', paddingLeft: '130px' }}>
            <Button variant="contained" onClick={handleClose} sx={{ padding: '10px 40px' }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitButtonDisabled()}
              sx={{ marginLeft: '20px', padding: '10px 40px' }}>
              {submitButtonLabel}
            </Button>
          </Box>
        </StyledForm>
      </Box>
    </>
  );
};

DataSetCreationForm.propTypes = {
  handleClose: PropTypes.func,
  modalClickHandler: PropTypes.func,
  dataSet: PropTypes.object
};

export default DataSetCreationForm;
