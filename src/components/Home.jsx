import React from 'react'
import jwtDecode from 'jwt-decode';
export default function Home() {
    const token = jwtDecode(localStorage.getItem('token'))
  return (
    <>
        <div  className='m-5 p-3 fs-4 shadow-lg rounded-pill text-center'>Welcome to Home</div>
        <div  className='m-2 p-3 fs-4 shadow-lg rounded-pill bg-dark text-white text-center'>Name: {token.name}</div>
        <div  className='m-2 p-3 fs-4 shadow-lg rounded-pill bg-dark text-white text-center'>Email: {token.email}</div>
    </>
  )
}
