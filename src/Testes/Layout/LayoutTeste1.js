import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';

function LayoutTeste1() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar 
        style = {{
          display: "flex",
          flexDirection: "flex-row" ,
          justifyContent: "space-between",
          backgroundColor: 'lightblue'
        }}>
          <Typography variant="h6">
            Meu Aplicativo
          </Typography>
          <CancelIcon />
        </Toolbar>
      </AppBar>
      <Container>
        <Typography 
        variant="h4"
        style={{ 
          marginTop: '20px',
            }}>
          Bem-vindo ao Meu Aplicativo
        </Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          Este é um layout básico usando React e Material-UI.
        </Typography>
      </Container>
    </div>
  );
}

export default LayoutTeste1;