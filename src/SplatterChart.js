import React, { useState } from 'react'
import { Typography, Card } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import img from './graphic1.png'

function SplatterChart() {



  return (

    <Card style={{ height: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
      <div style={{ display: 'flex', padding: 15, boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', paddingRight: 25, paddingLeft: 25, marginBottom : 10 }}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant ='subtitle2'>
            Products
          </Typography>
        </div>
        <div style={{ display : 'flex'}}>
          <Typography variant ='subtitle2'>
            By source
        </Typography>
          <ArrowDropDownIcon />
        </div>
        <ListIcon style={{flexGrow : 1}}/>
        <BubbleChartIcon />
      </div>
      <div style={{backgroundImage : `url(${img})`, backgroundPosition : 'center', backgroundSize : 'contain', backgroundRepeat : 'no-repeat', height : 'calc(100% - 54px)'}}>
      </div>
    </Card>
  )
}


export default SplatterChart;