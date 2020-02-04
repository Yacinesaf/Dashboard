import React from 'react'
import { Drawer, Grid } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function VerticalAppBar() {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div style={{display : mdDown ? 'none' : 'unset'}}>
      <Drawer variant="permanent" anchor='left'>
        <Grid container justify='center' alignContent='flex-start' style={{backgroundColor : '#354555', width : 64,  minHeight : '100vh'}}>
        <Grid item xs={12} style={{justifyContent : 'center', height : 64, display : 'flex', alignItems : 'center', backgroundColor : '#303f4e'}}>
          <DashboardIcon fontSize="large" style={{color : '#fffeff'}} />
        </Grid >
        <div style={{marginTop : 30}}>
        {[0,1,2,3,4,5].map((x,i) => (
          <Grid key={i} item xs={12} style={{textAlign : 'center', height : 64}}>
            <FiberManualRecordIcon key={x} style={{color : '#5f6b79'}}/>
            </Grid>
          ))}
          </div>
        </Grid>
      </Drawer>
    </div>
  )
}

export default VerticalAppBar;