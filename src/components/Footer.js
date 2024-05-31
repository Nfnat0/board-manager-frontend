import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0, backgroundColor: 'rgba(63, 81, 181, 0.6)' }}>
      <Toolbar>
        <Typography variant="body1" style={{ flex: 1, textAlign: 'center' }}>
          © 2024 Board Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
