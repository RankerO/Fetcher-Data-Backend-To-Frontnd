import "./alluser.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
function Two() {
  const [userData, setUserData] = useState([]);
  const callAccount = async () => {
    try {
      const res = await fetch('api/PriceGreaterThan10000', {
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
  return (<div>
    <div className='header'>
     Male Users which have a phone price greater than 10,000.
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Income</TableCell>
          <TableCell>City</TableCell>
          <TableCell>Car</TableCell>
          <TableCell>Quote</TableCell>
          <TableCell>Phone_Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData.map((i) => (
          <TableRow
            key={i.first_name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{i.id}</TableCell>
            <TableCell>{i.first_name}</TableCell>
            <TableCell>{i.last_name}</TableCell>
            <TableCell>{i.email}</TableCell>
            <TableCell>{i.gender}</TableCell>
            <TableCell>{i.income}</TableCell>
            <TableCell>{i.city}</TableCell>
            <TableCell>{i.car}</TableCell>
            <TableCell>{i.quote}</TableCell>
            <TableCell>{i.phone_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
  );
}

export default Two;
