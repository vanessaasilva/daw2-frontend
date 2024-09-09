import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/file.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

function BarraNavegacao() {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Formulario = () => {

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#BC8531"
        }}
      >
        <Toolbar>
          <div>
            <h1>
              MyPets
            </h1>
          </div>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100px',
              minWidth: '120px',
              height: 'auto',
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              paddingTop: '7%'
            }}
          />

          <Typography variant="h6" component="div"
            sx={{ flexGrow: 1 }}>

          </Typography>

          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button {...bindTrigger(popupState)}
                  color="inherit"
                  sx={{
                    marginRight: "10px",
                    border: "1px solid white"
                  }}>
                  Agendar
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={handleClickOpen}>Banho e tosa</MenuItem>
                  <MenuItem onClick={handleClickOpen}>Consultas</MenuItem>
                  <MenuItem onClick={handleClickOpen}>Vacinação</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Button
            color="inherit"
            onClick={() => { navigate("/login") }}
          >
            Sair
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
          >
            <DialogTitle>Nome do Pet</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Informe o nome do Animal de estimação
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="string"
                type="string"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit">Continuar</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BarraNavegacao;