// Component for persistent happy birthday celebration

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#62FAA7' }}>
        <Toolbar>
          <img src="/assets/party_popper.png" alt="Left Popper" style={{ margin: '0 auto', width: '40px', height: '40px' }} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h4" fontWeight="bold" color="white" component="div" sx={{ flexGrow: 1 }}>
              Happy 21st Birthday Haneul!
            </Typography>
          </Link>
          <img src="/assets/party_popper.png" alt="Right Popper" style={{ margin: '0 auto', width: '40px', height: '40px' }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
