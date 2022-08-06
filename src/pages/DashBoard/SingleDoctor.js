import { Avatar, Button, TableCell, TableRow } from "@mui/material";
import React from "react";

const SingleDoctor = ({ doctor, index, handleDoctorRemove }) => {
  const { email, name, img, specialty, _id } = doctor;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">{index + 1}</TableCell>
      <TableCell align="left" component="th" scope="row">
        <Avatar alt={name} src={img} />
      </TableCell>
      <TableCell align="left" component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{specialty}</TableCell>
      <TableCell align="left">
        <Button
          onClick={() => handleDoctorRemove(_id)}
          variant="contained"
          size="small"
          color="error"
        >
          remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SingleDoctor;
