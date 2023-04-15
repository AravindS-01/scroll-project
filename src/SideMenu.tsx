import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'

const SideMenu = () => {

  const sideMenu = [
    {
      label: 'Menu 1'
    },
    {
      label: 'Menu 2'
    },
    {
      label: 'Menu 3'
    },
    {
      label: 'Menu 4'
    },
    { 
      label: 'Menu 5'
    },
  ];
  return (
    <div>
      <Box sx={{ width: '320px', bgcolor: 'background.paper' }}>
        <List>
          {sideMenu.map((list) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={list.label} />
                </ListItemButton>
              </ListItem>
            )
          })
          }
        </List>
      </Box>
    </div>
  )
}

export default SideMenu