import React, { useState } from 'react'
import { Typography, Card, Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import PieChartIcon from '@material-ui/icons/PieChart';
import img1 from './graphic2.png'
function DiscChart() {



  return (

    <Card style={{ height: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
      <Grid container>
        <Grid item xs={12} style={{ boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom: 10 }}>
          <Grid container justify='center'>
            <Grid item xs={10} style={{ paddingTop: 15, paddingBottom: 15, display: 'flex' }}>
              <div style={{ flexGrow: 1 }}>
                <Typography variant='subtitle2'>
                  Users
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography variant='subtitle2'>
                  By source
                </Typography>
                <ArrowDropDownIcon />
              </div>
              <ListIcon style={{ flexGrow: 1 }} />
              <PieChartIcon />
            </Grid>
          </Grid>
        </Grid>
        <div style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: 180, width: '100%' }}>
        </div>
      </Grid>
    </Card>
  )
}


export default DiscChart;