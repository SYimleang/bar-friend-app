import React, { useState } from 'react';
import { Link, useHref } from 'react-router-dom';
import { Stack, useMediaQuery, colors, TextField, IconButton, Menu, MenuItem, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import LogoName from '../assets/logoName.svg';
import SearchBar from './SearchBar';
import DrinksData from '../assets/DrinkData.json'

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const [menuAnchor, setMenuAnchor] = useState(null);           // Menu state
  const [searchQuery, setSearchQuery] = useState('');           // Search state
  const [showSearchBox, setshowSearchBox] = useState(false)     // Search Box state

  // Menu functions
  const handleMenuClick = (e) => {
    setMenuAnchor(e.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // Search functions
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here, e.g., navigate to search results page
    console.log('Search query submitted:', searchQuery);
  };
  const handleSearchIconClick = () => {
    setshowSearchBox(true);
  }

  return (
    <Stack 
    direction="row" 
    justifyContent="none"
    sx={{
      gap: { sm: '40px', xs: '40px'}, 
      justifyContent:'none',
      backgroundColor: '#000000',
      color: '#ababab'
    }} px="20px"
    width="100%"
    >
      {isLargeScreen ? (
        <>
          <Link to="/">
              <img src={ LogoName } alt="logo" style={{ width: '180px', height: '48px', margin: '0 20px'}} /> 
          </Link>
          <Stack
            direction="row"
            gap="60px"
            width="80%"
            fontSize= "1.2em"
            alignItems="center"
          >
              <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
              <Link to="/alcohol" style={{textDecoration: 'none', color: 'inherit'}}>Alcohol</Link>
              <Link to="/mixer" style={{textDecoration: 'none', color: 'inherit'}}>Mixer</Link>
              <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</Link>
          </Stack>

          {showSearchBox ? (
            <SearchBar placeholder="Enter a name..." data={DrinksData} />
          ) : (
            <IconButton
              color="inherit"
              onClick={handleSearchIconClick}
              >
                <SearchIcon />
              </IconButton>
          )}
        </>
        ) : (
          <>
          <IconButton
            color="inherit"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
            <Link to="/alcohol" style={{textDecoration: 'none', color: 'inherit'}}>Alcohol</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
            <Link to="/mixer" style={{textDecoration: 'none', color: 'inherit'}}>Mixer</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
            <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</Link>
            </MenuItem>
          </Menu>
          <Link to="/" style={{ margin: '0 auto'}}>      
            <img src={ LogoName } alt="logo" style={{ width: '180px', height: '48px', margin: '0 20px'}} />      
          </Link>
          </>
        )}
        
    </Stack>
    
  )
}

export default Navbar