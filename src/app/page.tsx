// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainUserComponent from '../components/MainUserComponent'
const Home: React.FC = () => {

  const [selected, setSelected] = useState(0);
  
  return (
    <div className='flex'>
      <Sidebar selected={selected} />
      <main>
        <MainUserComponent/>
        <h1>Main Content</h1>
      </main>
    </div>
  );
};

export default Home;
