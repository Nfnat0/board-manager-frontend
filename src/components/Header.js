// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'rgba(63, 81, 181, 0.6)' }}>
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Board Manager</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
