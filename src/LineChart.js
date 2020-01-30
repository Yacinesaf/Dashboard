import React, { useState } from 'react'
import { Typography, Card } from '@material-ui/core';


function LineChart({img, title}) {

  
  return (

    <Card style={{ height: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
      <div style={{ display: 'flex', padding: 15, boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', paddingRight: 25, paddingLeft: 25 }}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant ='subtitle2'>
            {title}
          </Typography>
        </div>
          <Typography variant ='subtitle2' style={{paddingRight : 15}}>
            Day
        </Typography>
          <Typography variant ='subtitle2' style={{paddingRight : 15}}>
            Month
        </Typography>
          <Typography variant ='subtitle2' style={{paddingRight : 15}}>
            Year
        </Typography>
          <Typography variant ='subtitle2' style={{paddingRight : 15}}>
            5 Year
        </Typography>
      </div>
      <div style={{backgroundImage : `url(${img})`, backgroundPosition : 'center', backgroundSize : 'cover'}}>
      </div>
    </Card>
  )
}


export default LineChart;