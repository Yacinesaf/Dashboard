import React, {useState} from 'react';
import VerticalAppBar from './VerticalAppBar'
import { Grid } from '@material-ui/core';
import HorizentalAppBar from './HorizentalAppBar';
import UsersRevenue from './UsersRevenue'
import SplatterChart from './SplatterChart'
import DiscChart from './DiscChart'
import LineChart from './LineChart';
import img2 from './graphic3.png'
import BigChart from './BigChart';


function Main() {

  const [period, setPeriod] = useState('Last 7 days')
  const type = ['Revenue', 'New Users']
  const updatingPeriod = (e) => {
    setPeriod(e)
  }

  let p = 40;



  return (
    <div >
      <HorizentalAppBar />
      <Grid container style={{ backgroundColor: '#f2f2f2', height: 'calc(100vh - 64px)', padding: `${p}px` }}>
        <Grid item xs={4}>
          <Grid container>
          {type.map((x, i) => (
            <Grid item xs={12} style={{ padding: 10, height: `calc((100vh - (64px + ${p}px * 2)) / 3)` }}>
              <UsersRevenue key={i} type={x} period={period} updatingPeriod={updatingPeriod} />
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
                  <LineChart img={img2} period={period} updatingPeriod={updatingPeriod}/>
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
  );
}

export default Main;
