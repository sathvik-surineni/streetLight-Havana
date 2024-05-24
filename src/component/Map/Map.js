import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { IoLocationSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import './Map.css'

// Custom component for a marker
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// Custom pointer component
const Pointer = () => (
  <div style={{ width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%', border: '2px solid white' }}></div>
);

export default function Map() {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [directions, setDirections] = useState(null);
  useEffect(() => {
    // Fake API call to fetch data
    const fetchData = async () => {
      // Provided data
      const providedData = [
        { streetLightNo: "SL001", workingStatus: "Not Working", area: "City Center", latitude: 40.7128, longitude: -74.0060 },
        { streetLightNo: "SL002", workingStatus: "Not Working", area: "Suburbia", latitude: 41.8781, longitude: -87.6298 },
        { streetLightNo: "SL003", workingStatus: "Not Working", area: "Downtown", latitude: 34.0522, longitude: -118.2437 }
      ];
      setMarkers(providedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedMarker) {
      calculateRoute(selectedMarker.latitude, selectedMarker.longitude);
    }
  }, [selectedMarker]);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const calculateRoute = (destLat, destLng) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const directionsService = new window.google.maps.DirectionsService();
        const origin = { lat: position.coords.latitude, lng: position.coords.longitude };
        const destination = { lat: destLat, lng: destLng };

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="TableComplete p-5 ">
      {/* Render data in the form of a table */}
      <table>
        <thead>
          <tr>
            <th>Street Light No</th>
            <th>Working Status</th>
            <th>Area</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {markers.map(marker => (
            <tr key={marker.streetLightNo}>
              <td>{marker.streetLightNo}</td>
              <td style={{ color: 'red' }}>{marker.workingStatus}</td>
              <td>{marker.area}</td>
              <td>{marker.latitude}</td>
              <td>{marker.longitude}</td>
              <td>
              <Button variant="outline-primary" onClick={() => handleMarkerClick(marker)} className="fs-5 border-0 d-block mx-auto"><IoLocationSharp /></Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* GoogleMapReact component */}
      <div className="googlemaps pt-5 d-block mx-auto" style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCmV_CAmx0LJHif3juejoI8VEN_Y8nk-FY" }} // Replace with your API key
          defaultCenter={{ lat: 17.5287, lng: 78.2667 }}
          defaultZoom={11}
          center={selectedMarker ? { lat: selectedMarker.latitude, lng: selectedMarker.longitude } : null}
        >
          {/* Render markers */}
          {markers.map(marker => (
            <AnyReactComponent
              key={marker.streetLightNo}
              lat={marker.latitude}
              lng={marker.longitude}
              text={marker.streetLightNo}
            />
          ))}

          {/* Render pointer */}
          {selectedMarker && (
            <Pointer
              lat={selectedMarker.latitude}
              lng={selectedMarker.longitude}
            />
          )}

          {/* Render directions */}
          {directions && (
            <GoogleMapReact
              key="directions"
              defaultCenter={{ lat: directions.routes[0].legs[0].start_location.lat(), lng: directions.routes[0].legs[0].start_location.lng() }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={directions.routes[0].legs[0].start_location.lat()}
                lng={directions.routes[0].legs[0].start_location.lng()}
                text="You"
              />
              <AnyReactComponent
                lat={directions.routes[0].legs[0].end_location.lat()}
                lng={directions.routes[0].legs[0].end_location.lng()}
                text="Destination"
              />
            </GoogleMapReact>
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}
