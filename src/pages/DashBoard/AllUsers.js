import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // const {data:users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/users').then(res => res.json()));

  // if(isLoading){
  //   return <CircularProgress></CircularProgress>
  // }
  return (
    <div>
        <h2 style={{ textAlign: "center" }}>Total User: {users.length}</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Role</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <SingleUser key={index} user={user}></SingleUser>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
};

export default AllUsers;
