import React from 'react'
import SideMenu from './SideMenu'
import ContentArea from './ContentArea'
import Stack from '@mui/material/Stack'

const ProgressBar = () => {
  return (
    <Stack sx={{display:'flex',flexDirection:'row'}}>
        <SideMenu></SideMenu>
        <ContentArea></ContentArea>
    </Stack>
  )
}

export default ProgressBar