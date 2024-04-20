// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Sidebar from '@/components/Sidebar';
import MainUserComponent from '@/components/MainUserComponent'
import PortfolioHeader from '@/components/PortfolioHeader';
import Aside from '@/components/Aside';
import { Divider } from '@mui/material';
import MainContent from '@/components/MainContent';

const Home: React.FC = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className='flex'>
      <Sidebar selected={selected} />
      <Box >
        <MainUserComponent />
        <Box sx={{ margin: '1rem' }}>

          <PortfolioHeader />
          <Divider sx={{ position: 'relative', left: '20rem', width: '75vw', top: '4rem', height: '100%' }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', left: '20rem', top: '5rem', width: '75vw' }}>
            <MainContent />
            <Aside />
          </Box>
          <h1>Main Content</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
