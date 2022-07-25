import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';


const SingleService = (props) => {
    const {name, description, img} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ textAlign: 'center', minWidth: 275, boxShadow:'0', border: '1px solid #14d1c8', padding:'1rem 1.5rem '}}>
                <CardMedia
                component="img"
                style={{width: 'auto', height:'80px', margin: '0 auto'}}
                image={img}
                alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{fontWeight:'600', my:'10px'}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SingleService;