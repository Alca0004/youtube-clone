import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function SidebarRow({ title }) {
  return (
    <div className="sidebarRow">
      <HomeIcon />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;
