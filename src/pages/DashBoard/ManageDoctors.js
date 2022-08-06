import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SingleDoctor from "./SingleDoctor";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/doctors", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setIsLoading(false);
      });
  });

  const handleDoctorRemove = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this Doctor?"
    );
    if (confirmed) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.error("The Doctor has been Deleted");
            const remainingDoctors = doctors.filter(
              (doctor) => doctor._id !== id
            );
            setDoctors(remainingDoctors);
          } else {
            const errorMessage = data.error;
            toast.error(errorMessage);
          }
        });
    }
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "500", marginTop: "-10px" }}
        variant="h4"
      >
        Manage Doctors
      </Typography>
      <Typography
        sx={{
          color: "#14d1c8",
          textAlign: "center",
          fontWeight: "500",
        }}
        variant="h6"
      >
        Total Doctors: {doctors.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">NO.</TableCell>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Specialty</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor, index) => (
              <SingleDoctor
                handleDoctorRemove={handleDoctorRemove}
                key={doctor._id}
                index={index}
                doctor={doctor}
              ></SingleDoctor>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageDoctors;
