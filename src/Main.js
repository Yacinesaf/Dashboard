import React from 'react';
import VerticalAppBar from './VerticalAppBar'
import { Grid } from '@material-ui/core';
import HorizentalAppBar from './HorizentalAppBar';
import MenuComponent from './MenuComponent';




function Main() {
  return (
    <div >
      <HorizentalAppBar />
      <Grid container style={{ backgroundColor: '#f2f2f2', height: 'calc(100vh - 64px)', padding: 15 }}>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12} style={{ padding: 10, height: 'calc((100vh - (64px + 15px * 2)) / 3)' }}>
              <MenuComponent />
            </Grid>
            <Grid item xs={12} style={{ padding: 10, height: 'calc((100vh - 94px) / 3)' }}>
              <MenuComponent />
            </Grid>
            <Grid item xs={12} style={{ padding: 10, height: 'calc((100vh - 94px) / 3)' }}>
              <MenuComponent />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6} style={{ padding: 10, height: 'calc((100vh - 94px) / 3)' }}>
                  <MenuComponent />
                </Grid>
                <Grid item xs={6} style={{ padding: 10, height: 'calc((100vh - 94px) / 3)' }}>
                  <MenuComponent />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{ padding: 10, height: 'calc(((100vh - 94px) / 3) * 2)' }}>
            <MenuComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
