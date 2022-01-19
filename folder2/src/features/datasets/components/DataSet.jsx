import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataSetService from 'services/dataset.service';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';

export const DataSet = () => {
  const params = useParams();
  const [dataSet, setDataSet] = useState(null);

  useEffect(() => {
    if (params.dataSetId) {
      // const dataSetId = parseInt(params.dataSetId, 10);
      console.log(params.dataSetId);
      const postData = {
        RequestControl: {
          RequestID: uuidv4(),
          RequesterName: 'Sujith',
          RequesterLanguage: 'en'
        },
        TWINReferenceDataSet: {
          Name: '',
          ID: params.dataSetId
        }
      };

      DataSetService.get(postData)
        .then((response) => {
          // console.log(response.data.TWINReferenceDataSet);
          setDataSet(response.data.TWINReferenceDataSet);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  const clickEditHandler = (event) => {
    event.preventDefault();
  };
  const clickDeleteHandler = (event) => {
    event.preventDefault();
  };
  const clickPublishHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {dataSet && (
        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent={'flex-start'} alignItems={'flex-start'} mb={1}>
            <Grid item xs={3}>
              {dataSet.State === 'Draft' && <Chip label="Draft" color="success" size="small" />}
              {dataSet.State === 'publish' && (
                <Chip label="Published" color="primary" size="small" />
              )}
              <Typography>{dataSet.Name}</Typography>
            </Grid>
            <Grid item xs={6}>
              {dataSet.Description}
            </Grid>
            <Grid item xs={3}>
              <Button size="small" onClick={clickEditHandler} color="primary">
                Edit Testingsss
              </Button>
              <Button size="small" onClick={clickDeleteHandler} color="error">
                Delete
              </Button>
              {dataSet.State === 'Draft' && (
                <Button size="small" onClick={clickPublishHandler} color="success">
                  Publish
                </Button>
              )}
            </Grid>
          </Grid>
          <Divider />
        </Box>
      )}
    </>
  );
};

export default DataSet;
