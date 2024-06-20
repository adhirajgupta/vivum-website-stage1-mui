// DrawerItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const DrawerItem = ({ text, to, icon, onClick }) => {
  return (
    <ListItem disablePadding>
      <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default DrawerItem;
