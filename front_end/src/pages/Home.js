import React from 'react'
import { Link } from 'react-router-dom'
import "./alluser.css"
function Home() {
  return (
    <div className='Home'>
      <ul>
        <li>
          <Link to="/lowerThan5" className='h'>
            Users which have an income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
          </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="/PriceGreaterThan10000" className='h'>
          Male Users which have a phone price greater than 10,000.
        </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="/StartsWithM" className='h'>
          Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
        </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="/emailDoesNotIncludeAnyDigit" className='h'>
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
        </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="/DataofTop10Cities" className='h'>
          Show the data of top 10 cities which have the highest number of users and their average income
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
