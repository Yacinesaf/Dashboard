import React, { useState } from 'react'
import { Typography, Menu, MenuItem, IconButton, Card, Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function MenuComponent({ period, updatingPeriod, type }) {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const numsUsers = [134586, 475257, 7238415];
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
      <Grid container>
        <Grid item xs={12} style={{ boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom: 10 }}>
          <Grid container justify='center'>
            <Grid item xs={10} style={{ paddingTop: lgDown ? 10 : 15, paddingBottom: lgDown ? 10 : 15, display: 'flex' }}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{paddingTop : lgDown ? 5 : 30}}>
          <Typography variant={lgDown ? 'h4' : 'h2'} style={{ fontWeight: 400, textAlign: "center" }}>
            {whatValueToShow(type, period)}
          </Typography>
          <Typography variant={lgDown ? 'h6' : 'h4'} style={{ color: '#6daca0', fontWeight: 500, textAlign: 'center' }}>
            +2.7%
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}


export default MenuComponent;