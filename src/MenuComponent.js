import React, { useState } from 'react'
import { Grid, Typography, Menu, MenuItem, IconButton, Card } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';




function MenuComponent() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [period, setPeriod] = useState('');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    
    <Card style={{ height : '100%' ,boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)'}}>
    </Card>
  )
}


export default MenuComponent;