import { Menu } from '../../types/components/Sidebar/types';
import React from 'react';
import { Link } from '@mui/material';

const Sidebar = () => {
  const menus: Menu[] = [
    { id: 1, code: 'main', nameTh: 'หน้าหลัก', nameEn: 'main page' },
    { id: 2, code: 'plant', nameTh: 'ต้นไม้', nameEn: 'plant page' }
  ];

  return (
    <div
      style={{ width: '230px', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'GrayText' }}
    >
      <div style={{ height: '100px' }}>Title</div>
      <div style={{ flexGrow: 1 }}>
        {menus.map((menu: Menu) => (
          <div key={menu.id} style={{ height: '40px' }}>
            <Link href={menu.code} sx={{ textAlign: 'center' }} underline="none">
              {menu.nameTh}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
