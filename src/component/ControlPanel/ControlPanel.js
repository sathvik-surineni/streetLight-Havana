import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link from React Router
import Nav from 'react-bootstrap/Nav';
import { AiFillDashboard } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";

function ControlPanel() {
  return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home" className='p-3'>
    <Nav.Item>
        <Link to="dashboard" className='controlNavIcon'>< AiFillDashboard  style={{ fontSize: '30px'}}/></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="inventory" className='controlNavIcon'><MdInventory  style={{ fontSize: '30px' }}/></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="map" className='controlNavIcon'><BsFillPinMapFill  style={{ fontSize: '30px' }}/></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="analytics" className='controlNavIcon'><IoMdAnalytics style={{ fontSize: '30px' }} /></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="controltower" className='controlNavIcon'><FaRegLightbulb  style={{ fontSize: '30px' }}/></Link> {/* Use Link component */}
      </Nav.Item>
    </Nav>
    <Outlet/>
    </div>

    
  );
}

export default ControlPanel;
