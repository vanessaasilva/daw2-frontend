import react from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../assets/images/petimg.png';
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();


function PaginaLogin() {
   
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email');
    let password = data.get('password');

   

    if(email !== null || password !== null){
  return(
  'campoobrigatorio'
  )
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box
            sx={{
              width: '100%',
              maxwidth: '150px',
              minWidth: '120px',
              height: 'auto',
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              paddingTop: '75%',
    
            }}
          />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 ,}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="cpf"
              name="cpf"
              autoComplete="nome"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Senha"
              label="Senha"
              type="Senha"
              id="Senha"
              autoComplete="current-Senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Entrar
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PaginaLogin;