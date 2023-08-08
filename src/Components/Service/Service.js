import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({image}) => {
    return (
        <Card sx={{ 
            maxWidth: 345, 
            boxShadow:'none', 
            pt:2,
            mx: 'auto ',
            '&:hover':{boxShadow:'0 0 10px 0 rgba(0, 0, 0, 0.1)' }}}>
      <CardMedia
        sx={{ height: 140, width: 140, mx:'auto' }}
        image={image}
        title="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Web & Mobile Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    );
};

export default Service;