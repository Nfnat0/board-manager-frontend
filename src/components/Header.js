// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'rgba(63, 81, 181, 0.6)' }}>
      <Toolbar>
        <Typography variant="h6">
          Board Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
