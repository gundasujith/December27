import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppNavBar, ToolbarPadding } from './styled';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import * as React from 'react';

const Header = () => {
  return (
    <>
      <AppNavBar position="static" elevation={0}>
        <ToolbarPadding>
          <Typography variant="h4">RDM</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button startIcon={<HomeIcon />} color="inherit" component={Link} to={'/'}>
              Home
            </Button>
            <Button
              startIcon={<DashboardIcon />}
              color="inherit"
              component={Link}
              to={'/dashboard'}>
              Dashboard
            </Button>
            <Button startIcon={<StorageIcon />} color="inherit" component={Link} to={'/datasets'}>
              Data Sets
            </Button>
          </Box>
        </ToolbarPadding>
      </AppNavBar>
    </>
  );
};

export default Header;
