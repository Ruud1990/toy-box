import React from 'react';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from './ContactForm';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { shipmentArray } from '../productsStore';
import logo from '../img/logo_fun_box.png';

const pages = ['O nas', 'Zestawy', 'Pytania i odpowiedzi', 'Dlaczego warto', 'Kontakt'];

const style = {
  maxHeight: '80vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  
  


  return (
    <>

    <AppBar position="static" sx={{ bgcolor: '#fea916' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
        src={logo}
        alt='logo'
        style={{ width: '50px', height: '50px', marginRight: '10px' }}
      />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#6414ab',
              textDecoration: 'none',
            }}
          >
            FUN BOX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link}
                to={`/${page.toLowerCase().replace(/\s/g, '-')}`}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#6414ab',
              textDecoration: 'none',
            }}
          >
            FUN BOX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s/g, '-')}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <Button sx={{bgcolor: '#6414ab'}} onClick={handleOpen} variant="contained" endIcon={<ShoppingCartOutlinedIcon />}>
          {productsCount}
</Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        top: '5px',
        right: '5px',
      }}
    >
      <CloseIcon />
    </IconButton>
    {productsCount > 0 ? (
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Twoje Zamówienie
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {cart.items.map((currentProduct, index) => (
            <ListItem key={currentProduct.title} disableGutters>
              <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} />
            </ListItem>
          ))}
        </List>
        {/* Dodaj osobną pozycję dla wysyłki */}
        <ListItem disableGutters>
          <ListItemText primary="Wysyłka" />
          <Typography>{shipmentArray[0].price.toFixed(2)}</Typography>
        </ListItem>
        <Divider />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Total: {(cart.getTotalCost() + shipmentArray[0].price).toFixed(2)}
        </Typography>
        <ContactForm />
      </Box>
    ) : (
      <Typography textalign="center" id="modal-modal-description" sx={{ mt: 2 }}>
        Twój koszyk jest pusty :(
      </Typography>
    )}
  </Box>
</Modal>

    </>
  )
}

export default Navbar