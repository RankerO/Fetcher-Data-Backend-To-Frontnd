import "./alluser.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
function Five() {
  const [userData, setUserData] = useState([]);
  const callAccount = async () => {
    try {
      const res = await fetch('api/DataofTop10Cities', {
        method: 'GET',
        headers: {

          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log("hello");
    callAccount();
  }, []);
  return (
    <div>
      <div className='header'>
        Show the data of top 10 cities which have the highest number of users and their average income.
      </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>No Of User</TableCell>
          <TableCell>Average Income</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData.map((i) => (
          <TableRow
            key={i.first_name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{i._id}</TableCell>
            <TableCell>{i.userCount}</TableCell>
            <TableCell>{i.avgIncome}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </TableContainer>
      </div>
  );
}

export default Five;
