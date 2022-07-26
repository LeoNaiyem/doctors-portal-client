import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import Patient from './Patient';


const patients = [
    {
        id: 1,
        name: 'Winson Harry',
        city: 'California',
        img: people1,
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nesciunt inventore vel, impedit a enim sint, consequatur perferendis totam explicabo neque eius ullam ducimus odit corrupti sunt, cum velit vitae dolorem ea voluptate. Aspernatur, blanditiis.'
    },
    {
        id: 2,
        name: 'Winson Harry',
        city: 'California',
        img: people2,
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nesciunt inventore vel, impedit a enim sint, consequatur perferendis totam explicabo neque eius ullam ducimus odit corrupti sunt, cum velit vitae dolorem ea voluptate. Aspernatur, blanditiis.'
    },
    {
        id: 3,
        name: 'Winson Harry',
        city: 'California',
        img: people3,
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nesciunt inventore vel, impedit a enim sint, consequatur perferendis totam explicabo neque eius ullam ducimus odit corrupti sunt, cum velit vitae dolorem ea voluptate. Aspernatur, blanditiis.'
    }
]

const Testimonial = () => {
    return (
        <Container sx={{my: '80px'}}>
            <Typography sx={{ fontWeight:500, color: '#11d1c8', fontSize:'25px'}} variant='h6'>
                Testimonial            
            </Typography>
            <Typography sx={{ fontWeight:600, fontSize:'35px', mt:'10px' }} variant='h3'>
                What's Our Patients <br />
                Says
            </Typography>
            <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
                {
                    patients.map(patient => <Patient key={patient.id} patient ={patient}></Patient>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;