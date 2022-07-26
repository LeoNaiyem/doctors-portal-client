import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Treatment></Treatment>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;