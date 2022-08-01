import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`,{
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
    })
    .then(res=>{
      if (res.status === 403) {
        toast.error("You Don't Have The Permission")
      }
      return res.json()
    })
    .then(data =>{
      if(data.modifiedCount > 0){
        toast.success("Successfully Made An Admin");
      }
    })
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left" component="th" scope="row">
        {user?.displayName}
      </TableCell>
      <TableCell align="left">{user?.email}</TableCell>
      <TableCell align="left">
        {
          role === 'admin' ? 
          <span style={{color:'#1565c0', fontWeight:'500'}}>Admin</span>
          :
          <Button
          onClick={makeAdmin}
          variant="contained"
          size="small"
          color="success"
        >
          make admin
        </Button>
        }
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
