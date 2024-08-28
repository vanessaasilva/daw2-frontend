import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/pet img.png'


function BarraNavegacao() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#BC8531"
        }}
      >
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button
            color="inherit"
            sx={{
              marginRight: "10px",
              border: "1px solid white"
            }}
          >Agendar
          </Button>
          <Button color="inherit">Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BarraNavegacao;