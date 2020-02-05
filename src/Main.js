import React, { useState } from 'react';
import VerticalAppBar from './VerticalAppBar'
import { Grid } from '@material-ui/core';
import HorizentalAppBar from './HorizentalAppBar';
import UsersRevenue from './UsersRevenue'
import SplatterChart from './SplatterChart'
import DiscChart from './DiscChart'
import LineChart from './LineChart';
import img2 from './graphic3.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BigChart from './BigChart';

function Main() {

  const type = ['Revenue', 'New Users']
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));


  let p = mdDown ? 20 : 40;


  return (
    <div >
      <VerticalAppBar />
      <div style={{display: mdDown ? '' : 'none'}}>
        <HorizentalAppBar />
      </div>
      <div style={{width: 'calc(100% - 64px)', float: 'right', display: mdDown ? 'none' : ''}}>
        <HorizentalAppBar />
        <Grid container style={{ backgroundColor: '#f2f2f2', height: 'calc(100vh - 64px)', padding: `${p}px`}}>
          <Grid item xs={4}>
            <Grid container>
              {type.map((x, i) => (
                <Grid key={i} item xs={12} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)` }}>
                  <UsersRevenue type={x} />
                </Grid>
              ))}
              <Grid item xs={12} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)` }}>
                <SplatterChart />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)` }}>
                    <DiscChart />
                  </Grid>
                  <Grid item xs={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)` }}>
                    <LineChart img={img2} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} style={{ padding: 10, height: `calc(((100vh - (64px + ${p}px * 2)) / 3) * 2)` }}>
                <BigChart />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container justify='center' style={{ padding: `${p}px`, display: mdDown ? '' : 'none' }}>
        {type.map((x, i) => (
          <Grid item key={i} xs={12} sm={9} md={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)`, minHeight: 250 }}>
            <UsersRevenue type={x} />
          </Grid>
        ))}
        <Grid item xs={12} sm={9} md={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)`, minHeight: 250 }}>
          <SplatterChart />
        </Grid>
        <Grid item xs={12} sm={9} md={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)`, minHeight: 250 }}>
          <DiscChart />
        </Grid>
        <Grid item xs={12} sm={9} md={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)`, minHeight: 250 }}>
          <LineChart img={img2} />
        </Grid>
        <Grid item xs={12} sm={9} md={6} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)`, minHeight: 250 }}>
          <BigChart />
        </Grid>
      </Grid>
    </div >
  );
}

export default Main;
