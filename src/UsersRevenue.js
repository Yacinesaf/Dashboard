import React, { useState } from 'react'
import { Typography, Menu, MenuItem, IconButton, Card, Grid, CardContent, CardHeader } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function MenuComponent({ type }) {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [period, setPeriod] = useState('Last 7 days')
  const updatingPeriod = (e) => {
    setPeriod(e)
  }

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
      <CardHeader
        style={{boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', padding : 14}}
        title={type}
        titleTypographyProps={{ variant: 'subtitle2' }}
        action={
          <div style={{display : 'flex'}}  onClick={handleClick}>
            <Typography style={{paddingTop : 11}} variant='subtitle2'>
              {period}
            </Typography>
            <ArrowDropDownIcon style={{paddingTop : 11}}/> 
          </div>
        }
      />
      <CardContent style={{height : 'calc(100% - 59px)', padding : 0}}>
        <Grid container justify='center' alignContent='center' style={{height : '100%'}}>
          <Grid item>
            <Typography variant={mdDown ? 'h5' : 'h4'} style={{ fontWeight: 500, textAlign: "center" }}>
              {whatValueToShow(type, period)}
            </Typography>
            <Typography variant={mdDown ? 'h6' : 'h5'} style={{ color: '#6daca0', fontWeight: 500, textAlign: 'center' }}>
              +2.7%
          </Typography>
          </Grid>
        </Grid>
      </CardContent>
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
      </Menu>
    </Card >
  )
}


export default MenuComponent;