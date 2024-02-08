import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchDrinks from '../components/SearchDrinks';
import Drinks from '../components/Drinks';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchDrinks />
      <Drinks />
    </Box>
  )
}

export default Home