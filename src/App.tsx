import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
