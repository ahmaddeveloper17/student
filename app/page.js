"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarStyle = {
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    top: '0',
    left: sidebarOpen ? '0' : '-250px',
    transition: 'left 0.3s ease-in-out',
    zIndex: '1000',
    paddingTop: '60px',
  };

  const contentStyle = {
    marginLeft: sidebarOpen ? '250px' : '0',
    transition: 'margin 0.3s ease-in-out',
    padding: '20px',
  };

  return (
    <div><div style={{textAlign:"center"}}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#" >Students</Navbar.Brand>
      </Navbar></div>
      <div style={sidebarStyle}>
        <Nav className="flex-column">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          
        </Nav>
      </div>
      <div style={contentStyle}>
       
        <button type="button" class="btn btn-outline-secondary" onClick={toggleSidebar} >Open Sidebar</button>
        <h1>Main Content</h1>
        <p>Welcome to the main content area. Click the button to toggle the sidebar.</p>
      </div>
    </div>
  );
};

export default Home;
