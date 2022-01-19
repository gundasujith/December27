import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import DataSetCard from './DataSetCard';

export default function DataSetCardList({ dataSets, handleDelete, handleEdit, handleView }) {
  return (
    <Grid container spacing={1}>
      {dataSets &&
        dataSets.map((dataSet, index) => {
          return (
            <Grid item xs={3} key={`${index}_${dataSet.ID}`}>
              <DataSetCard
                id={dataSet.ID}
                title={dataSet.Name}
                description={dataSet.Description}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}

DataSetCardList.propTypes = {
  dataSets: PropTypes.array,
  handleView: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func
};
