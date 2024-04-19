// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {

  const [selected, setSelected] = useState(0);
  
  return (
    <div className='flex'>
      <Sidebar selected={selected} />
      <main>
        <h1>Main Content</h1>
      </main>
    </div>
  );
};

export default Home;
