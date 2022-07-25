import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;