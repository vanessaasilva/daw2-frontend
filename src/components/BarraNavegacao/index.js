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
import { Modal, TextField } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BarraNavegacao() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <img
            src={Logo} alt="Logo"
            style={{
              height: 90,
              marginLeft: 5,
              marginTop: 10
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
                  <MenuItem onClick={handleOpen}>Banho e tosa</MenuItem>
                  <MenuItem onClick={popupState.close}>Consultas</MenuItem>
                  <MenuItem onClick={popupState.close}>Vacinação</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Button color="inherit">Sair</Button>
        </Toolbar>

        <div className="">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                border: 1,
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="Informacoes">
                    <TextField id="standard-basic" label="Nome do Pet" variant="standard" />
                    <TextField id="standard-basic" label="Nome do Tutor" variant="standard" />
                    <TextField id="standard-basic" label="Contato" variant="standard" />
                  </div>
                </Typography>
              </Box>

            </Box>
          </Modal>
        </div>
      </AppBar>
    </Box>
  );

}

export default BarraNavegacao;