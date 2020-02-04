import React, { useState } from 'react'
import { Typography, Card, Menu, MenuItem, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Chart from './Chart';


function BigChart({ img, title }) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [period, setPeriod] = useState('Day')

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const updatingPeriod = (e) => {
    setPeriod(e)
  }



  return (

    <Card style={{ height: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
      <Grid container>
        <Grid item xs={12} style={{ boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom: 10 }}>
          <Grid container justify='center'>
            <Grid item xs={11} style={{ paddingTop: 15, paddingBottom: 15 }}>
              <div style={{ display: 'flex' }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant='subtitle2'>
                    Performance
              </Typography>
                </div>
                <div style={{ display: xsOnly ? 'none' : 'flex' }}>
                  <Typography variant='subtitle2' style={{ paddingRight: 10 }}>
                    Day
              </Typography>
                  <Typography variant='subtitle2' style={{ paddingRight: 10 }}>
                    Month
              </Typography>
                  <Typography variant='subtitle2' style={{ paddingRight: 10 }}>
                    Year
              </Typography>
                  <Typography variant='subtitle2' style={{ paddingRight: 10 }}>
                    5 Year
              </Typography>
                </div>
                <div style={{ display: xsOnly ? 'flex' : 'none' }}>
                  <Typography variant='subtitle2' style={{ paddingRight: 10 }}>
                    {period}
                  </Typography>
                  <ArrowDropDownIcon onClick={handleClick} />
                </div>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={(e) => {
                  updatingPeriod(e.target.innerText);
                  handleClose();
                }}>Day</MenuItem>
                <MenuItem onClick={(e) => {
                  updatingPeriod(e.target.innerText);
                  handleClose();
                }}>Month</MenuItem>
                <MenuItem onClick={(e) => {
                  updatingPeriod(e.target.innerText);
                  handleClose();
                }}>Year</MenuItem>
                <MenuItem onClick={(e) => {
                  updatingPeriod(e.target.innerText);
                  handleClose();
                }}>5 Year</MenuItem>
                <MenuItem onClick={handleClose}></MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
        <Chart />
        </Grid>
      </Grid>
    </Card>
  )
}


export default BigChart;