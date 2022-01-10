import React from 'react';
import { PageContainer, ChildContainer } from './styled';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <PageContainer>
        <Box mt={4}>
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={11}>
              <ChildContainer>{children}</ChildContainer>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  mobileHeader: PropTypes.any
};
export default Layout;
