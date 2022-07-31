import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({user}) => {

    const makeAdmin = () =>{
        toast.success('Successfully Made Admin');
        console.log('Successfully Made Admin');
      }
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left" component="th" scope="row">
        {user?.displayName}
      </TableCell>
      <TableCell align="left">{user?.email}</TableCell>
      <TableCell align="left">
        <Button
          onClick={makeAdmin}
          variant="contained"
          size="small"
          color="success"
        >
          make admin
        </Button>
      </TableCell>
      <TableCell align="left">
        <Button variant="contained" size="small" color="error">
          remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SingleUser;
