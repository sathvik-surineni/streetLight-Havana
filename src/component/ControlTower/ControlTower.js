import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ControlTower.css'
import { IoRadioButtonOnOutline } from "react-icons/io5";
const ControlTower = () => {
  const [streetlights, setStreetlights] = useState([]);

  useEffect(() => {
    // Set streetlights data directly
    const streetlightsData = {
      "streetlights": [
        {
          "streetlight_number": "5",
          "address": "123 Main Street"
        },
        {
          "streetlight_number": "4",
          "address": "456 Elm Street"
        }
      ]
    };

    setStreetlights(streetlightsData.streetlights);
  }, []);

  const toggleOutput = async (url, streetlightNumber) => {
    try {
      await axios.get(url);
      // Update the state of the toggled streetlight
      setStreetlights(prevStreetlights =>
        prevStreetlights.map(streetlight =>
          streetlight.streetlight_number === streetlightNumber
            ? { ...streetlight, state: streetlight.state === 'on' ? 'off' : 'on' }
            : streetlight
        )
      );
    } catch (error) {
      console.error('Error toggling streetlight:', error);
    }
  };

  return (
    <div className='m-5 controltowercontainer'>
      
      <table>
        <thead>
          <tr>
            <th>Streetlight Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {streetlights.map(streetlight => (
            <tr key={streetlight.streetlight_number}>
              <td>{streetlight.streetlight_number}</td>
              <td>{streetlight.address}</td>
              <td>
                <button onClick={() => toggleOutput(`http://192.168.216.41/${streetlight.streetlight_number}/on`, streetlight.streetlight_number)} className='contolTowerLightBtn m-2'><IoRadioButtonOnOutline className='success boarder-0' /></button>
                <button onClick={() => toggleOutput(`http://192.168.216.41/${streetlight.streetlight_number}/off`, streetlight.streetlight_number)} className='contolTowerLightBtn m-2'><IoRadioButtonOnOutline className='danger boarder-0' /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlTower;
