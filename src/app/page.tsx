// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Sidebar from '../components/Sidebar';
import MainUserComponent from '../components/MainUserComponent'
import PortfolioHeader from '@/components/PortfolioHeader';
import { Divider } from '@mui/material';

const Home: React.FC = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className='flex'>
      <Sidebar selected={selected} />
      <main>
        <MainUserComponent />
        <Box sx={{margin: '1rem'}}>

        <PortfolioHeader/>
        <Divider/>
        <Box sx={{ border: '2px solid r d', display: 'flex' }}>
          <h2>working</h2>
          <h1>Main Content</h1>

        </Box>
        <h1>Main Content</h1>
        </Box>
      </main>
    </div>
  );
};

export default Home;
