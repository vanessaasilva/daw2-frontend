import react from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function PaginaLogin() {

    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="cpf"
          id="demo-helper-text-aligned"
          label="inserir cpf"
        />
        <TextField
          helperText="senha "
          id="demo-helper-text-aligned-no-helper"
          label="inserir senha"
        />
         <Button 

         variant="contained">Contained</Button>
      </Box>
    );






}

export default PaginaLogin;