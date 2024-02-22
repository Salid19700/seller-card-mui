import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from './Logo';
import { ModalCity } from './Modal';
import { DrowerBanner } from './Drower';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function Bar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color='secondary'>
      <Toolbar>
      <Logo/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ModalCity/>
        </Typography>
        <Button color="inherit">Publish Ad</Button>
        <DrowerBanner />
      </Toolbar>
    </AppBar>
    
  </Box>
  );
};
