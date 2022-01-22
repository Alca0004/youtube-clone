import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="Header">
      <h1>I am a header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
    </div>
  );
}

export default Header;
