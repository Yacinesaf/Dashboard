import React from 'react'
import { Toolbar, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function HorizentalAppBar() {
  return (
    <div>
      <Toolbar style={{backgroundColor: 'white', width: '100%', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', padding: 0, minHeight: 64 }}>
        <Grid container>
          <Grid item xs={12} style={{display : 'flex' ,paddingLeft : 25, paddingRight : 25 }}>
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <SearchIcon fontSize='large' style={{ color: '#b8bcbf' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ChatBubbleIcon fontSize='default' style={{ color: '#b8bcbf' }} />
              <NotificationsActiveIcon fontSize='default' style={{ color: '#b8bcbf', paddingRight: 20, paddingLeft: 20 }} />
              <AccountCircleIcon fontSize='large' style={{ color: '#b8bcbf' }} />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  )
}

export default HorizentalAppBar;