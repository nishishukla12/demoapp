import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Categorycard({
  img_url, heading, subheading, link
}) {
  return (
    <div className='categorey_card'>
      <Card sx={{ maxWidth: 345 }}>
        <div><img src={img_url} alt="img1" /></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subheading}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Categorycard