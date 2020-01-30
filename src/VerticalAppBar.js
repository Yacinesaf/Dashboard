import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashboardIcon from '@material-ui/icons/Dashboard';



function VerticalAppBar() {
  return (
    <div>
      <Drawer width="50%" variant="permanent" style ={{backgroundColor : '#354555'}}>
        <div style={{display: 'flex', flexDirection : "column"}}>
          <DashboardIcon fontSize="large" style={{color : '#fffeff'}} />
          {[0,1,2,3,4,5].map(x => (
            <FiberManualRecordIcon key={x} style={{color : '#5f6b79', padding:25}}/>
          ))}
        </div>
      </Drawer>
    </div>
  )
}

export default VerticalAppBar;