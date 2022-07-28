import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const BookedAppointments = ({date}) => {
    const [bookedAppointments, setBookedAppointments] = useState([]);
    const {user} = useAuth();
    const dateString = date.toLocaleDateString();

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${dateString}`)
        .then(res => res.json())
        .then(data => setBookedAppointments(data))
    }, [ user.email, dateString ]);

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Total Booked Appointments {bookedAppointments.length}</h1>
            <h4 style={{textAlign: 'center'}}>Date: {dateString}</h4>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedAppointments.map((bookedAppointment) => (
            <TableRow
              key={bookedAppointment.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {bookedAppointment.patientName}
              </TableCell>
              <TableCell align="center">{bookedAppointment.time}</TableCell>
              <TableCell align="center">{bookedAppointment.serviceName}</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default BookedAppointments;