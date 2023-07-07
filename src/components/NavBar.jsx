import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className='d-flex justify-content-center'>
            { !localStorage.getItem("token") ?
                <div>
                    <Link to = 'sign-in' className='text-decoration-none'>
                        <Navbar.Brand className='fs-5 bg-primary ps-2 pe-2 rounded'>Sign in</Navbar.Brand>
                    </Link>
                    <Link to = 'register' className='text-decoration-none'>
                    <Navbar.Brand className='fs-5 bg-secondary ps-2 pe-2 rounded'>Register</Navbar.Brand>
                    </Link>
                </div>
                :
                <Button className="fs-5 bg-danger ps-2 pe-2 rounded border border-none" onClick={()=>{localStorage.removeItem("token"); navigate('sign-in')}}>
                    Sign Out
                </Button>
            }
        </Container>
    </Navbar>
  )
}
