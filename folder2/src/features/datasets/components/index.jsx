// import { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import DataSetCreateModal from './DataSetCreateModal';
import { DataSetList } from './DataSetList';

const DataSets = () => {
  return (
    <>
      <Box>
        <DataSetList />
        {/*<Box>
          <Box onClick={handleOpen}>
            <Button type="button">Create a DataSet</Button>
          </Box>
          <DataSetCreateModal open={open} handleClose={handleClose} />
        </Box>*/}
      </Box>
    </>
  );
};

export default DataSets;
