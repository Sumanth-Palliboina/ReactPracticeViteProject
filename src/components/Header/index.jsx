

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import {AppLogo} from "./styled-components"

import './index.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

const pages = ['Dashboard', 'Products', 'Cart', 'Contact US'];
const settings = ['Profile', 'My Orders', 'Logout'];

function Header() {
  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const getNavLink = (page) => {
    if (page.toLowerCase() === "dashboard") {
        return "/"
    } else if (page.toLowerCase() === "contact us") {
        return "/contact-us"
    } else if (page.toLowerCase() === "products") {
        return "/products"
    } else {
        return "/cart"
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#6f6161' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Link to="/" replace>
            <AppLogo src="/lion_logo.jpg" wd="50px" ht="50px"  />
          </Link>

          {location.pathname === "/products" ? <input className='small-devices-hide large-devices-show' type="search" placeholder='Search Product' style={{accentColor: 'green',fontSize: '14px', height:'30px', outline: 'none', border: 'none', background: '#e6dfdf', borderRadius: '10px', marginLeft:'30px', paddingLeft:'10px'}} /> : null}

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
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <NavLink key={page} to={getNavLink(page)} className={({isActive}) => (isActive ? 'active-link' : '')} style={({isActive}) => ({textDecoration: "none", color: !isActive ? '#dad6d6' : ''})}>
                  <MenuItem onClick={() => setAnchorElNav(null)}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          {location.pathname === "/products" ? <input className='small-devices-show large-devices-hide' type="search" placeholder='Search Product' style={{accentColor: 'green',fontSize: '14px', height:'30px', outline: 'none', border: 'none', background: '#e6dfdf', borderRadius: '10px', paddingLeft:'10px'}} /> : null }
         
          <Box sx={{ display: { xs: 'none', md: 'flex' },  ml: 'auto' }}>
            {pages.map((page) => (
              <Button
              id="navLink-item"
                key={page}
                onClick={() => setAnchorElNav(null)}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
              >
                <NavLink to={getNavLink(page)} className={({isActive}) => (isActive ? 'active-link' : '')}  style={({isActive}) => ({textDecoration: "none", color: !isActive ? '#dad6d6' : ''})}>
                  {page}
                </NavLink>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
