import "./alluser.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
function Three() {
  const [userData, setUserData] = useState([]);
  const callAccount = async () => {
    try {
      const res = await fetch('api/StartswithM', {
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
  // return (
  //   <div className='loginContainer'>
  //     <table style={{ width: 800 }}>
  //       <h3>data of  all users</h3>
  //       <tr>
  //         <th>id</th>
  //         <th>first_name</th>
  //         <th>last_name</th>
  //         <th>email</th>
  //         <th>gender</th>
  //         <th>income</th>
  //         <th>city</th>
  //         <th>car</th>
  //         <th>quote</th>
  //         <th>phone_price</th>
  //       </tr>
  //       {
  //         userData.map((i) => {
  //           return (
  //             <tr>
  //               <td>{i.id}</td>
  //               <td>{i.first_name}</td>
  //               <td>{i.last_name}</td>
  //               <td>{i.email}</td>
  //               <td>{i.gender}</td>
  //               <td>{i.income}</td>
  //               <td>{i.city}</td>
  //               <td>{i.car}</td>
  //               <td>{i.quote}</td>
  //               <td>{i.phone_price}</td>
  //             </tr>
  //           );
  //         })
  //       }
  //     </table>
  //   </div>
  // )
  return (
    <div>
      <div className='header'>
        Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
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

export default Three;
