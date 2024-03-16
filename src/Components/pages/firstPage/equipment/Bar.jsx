import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";

import { DrowerBanner } from "../../secondPage/equpment/Drower";
import { Link } from "react-router-dom";
import { ModalCity } from "./Modal";
import { Logo } from "../../secondPage/equpment/Logo";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function Barr() {
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
  const handelAd = () => {
    console.log("hello");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1, marginBottom: 15}}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <Logo />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <ModalCity />
              </Typography>
              <Button onClick={handelAd} color="inherit">
                <Link to='/poster'>
                  Publish Ad
                </Link>
              </Button>
              <DrowerBanner />
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </React.Fragment>
  );
}
