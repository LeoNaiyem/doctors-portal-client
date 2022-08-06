import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const BookedAppointments = ({ date }) => {
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const { user, handleLogOutUser } = useAuth();
  const navigate = useNavigate();
  const dateString = date.toLocaleDateString();

  useEffect(() => {
    fetch(
      `https://vast-plateau-43537.herokuapp.com/appointments?email=${user.email}&date=${dateString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          handleLogOutUser();
          localStorage.removeItem("accessToken");
          navigate("/");
        }

        return res.json();
      })
      .then((data) => {
        return setBookedAppointments(data);
      });
  }, [user.email, dateString, navigate, handleLogOutUser]);

  const handleAppointmentCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (confirmed) {
      fetch(`https://vast-plateau-43537.herokuapp.com/appointments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.info("Appointment has been Canceled");
            const remainingAppointments = bookedAppointments.filter(
              (bp) => bp._id !== id
            );
            setBookedAppointments(remainingAppointments);
          } else {
            const errorMessage = data.error;
            toast.error(errorMessage);
          }
        });
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Total Booked Appointments {bookedAppointments.length}
      </h1>
      <h4 style={{ textAlign: "center" }}>Date: {dateString}</h4>
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
            {bookedAppointments.map((bookedAppointment, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {bookedAppointment.patientName}
                </TableCell>
                <TableCell align="center">{bookedAppointment.time}</TableCell>
                <TableCell align="center">
                  {bookedAppointment.serviceName}
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() =>
                      handleAppointmentCancel(bookedAppointment._id)
                    }
                    variant="contained"
                    size="small"
                    color="error"
                  >
                    cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookedAppointments;
