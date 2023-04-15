import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

const ContentArea = () => {

    const content =[
        {
            value:'first one'
        },
        {
            value:'second one'
        },
        {
            value:'third one'
        },
        {
            value:'four one'
        },
        {
            value:'five one'
        },
        
    ]
  return (
    <div>
        {content.map((data) =>{ return (
            <Card sx={{    width: '100vh',height: '200px',margin:'20px', backgroundColor:'plum'}}>
            <CardContent>
                <Typography>{"bwquqj0"}</Typography>
            </CardContent>
          </Card>
        )})}
      

    </div>
  )
}

export default ContentArea