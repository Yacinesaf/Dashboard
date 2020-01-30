import React, { useState } from 'react'
import { Typography, Menu, MenuItem, IconButton, Card } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';




function MenuComponent({ period, updatingPeriod, type }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const numsUsers = [1345, 475257, 7238415];
  const numsRevenue = ['42.4M', '171.8M', '457.2M'];

  const whatValueToShow = (strA, strB) => {
    if (strA === 'Revenue') {
      if (strB === 'Last 7 days') {
        return numsRevenue[0]
      } else if (strB === 'Last 30 days') {
        return numsRevenue[1]
      } else if (strB === 'Last 90 days') {
        return numsRevenue[2]
      }
    }
    if (strA === 'New Users') {
      if (strB === 'Last 7 days') {
        return numsUsers[0]
      } else if (strB === 'Last 30 days') {
        return numsUsers[1]
      } else if (strB === 'Last 90 days') {
        return numsUsers[2]
      }
    }
  }


  return (

    <Card style={{ height: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
      <div style={{ boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', display: 'flex', padding: 15, paddingRight : 25, paddingLeft : 25 }}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant='subtitle2'>
            {type}
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography variant='subtitle2'>
            {period}
          </Typography>
          <IconButton style={{ padding: 0 }} onClick={handleClick}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={(e) => {
              updatingPeriod(e.target.innerText);
              handleClose();
            }}>Last 7 days</MenuItem>
            <MenuItem onClick={(e) => {
              updatingPeriod(e.target.innerText);
              handleClose();
            }}>Last 30 days</MenuItem>
            <MenuItem onClick={(e) => {
              updatingPeriod(e.target.innerText);
              handleClose();
            }}>Last 90 days</MenuItem>
            <MenuItem onClick={handleClose}></MenuItem>
          </Menu>
        </div>
      </div>
      <div style={{paddingTop : 30}}>
        <Typography variant='h2' style={{ fontWeight: 400, textAlign: "center" }}>
          {whatValueToShow(type, period)}
        </Typography>
        <Typography variant='h4' style={{ color: '#6daca0', fontWeight: 500, textAlign: 'center' }}>
          +2.7%
        </Typography>
      </div>
    </Card>
  )
}


export default MenuComponent;