import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date ={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date ={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;