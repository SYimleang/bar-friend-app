import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

import Logo from '../assets/logoFull.svg';

const Footer = () => (
  <Box mt="80px" bgcolor="#000000" px="5vw" color="#ababab">
    <Stack 
      direction="row" 
      justifyContent="space-between"
      gap="40px"
      sx={{ alignItems: 'center', flexWrap: 'wrap'  }}
      p="15px 0"
      >
        <Stack 
          sx={{ 
            width: "33%", 
            borderRight: {md: '2px solid #ababab', xs: 'none'}, 
            minHeight: '100px',
            justifyContent: "center"
            }}>
          <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '150px' }} />
          </Link>
        </Stack>
        <Stack 
          direction="row" 
          gap="20px" 
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: 'center'
          }}
          minHeight="80px"
        >
          <Link to="https://www.linkedin.com/in/sasawat-yimleang-564620155/"><LinkedInIcon style={{color: '#ababab'}}/></Link>
          <Link to="https://github.com/SYimleang"><GitHubIcon style={{color: '#ababab'}}/></Link>
          <Link to='javascript:void(0)' style={{color: '#ababab'}}
                onClick={() => window.location = 'mailto:yourmail@domain.com'}>
            <EmailIcon />
          </Link>  
        </Stack>
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: { lg: '20px', xs: '16px'},
            borderLeft: {md: '2px solid #ababab', xs: 'none'}, 
            textAlign: 'center',
            flex: 1,
            minHeight: "100px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            <CopyrightIcon /> 2024 Sasawat Yimleang
          </Typography>
    </Stack>
  </Box>
)

export default Footer