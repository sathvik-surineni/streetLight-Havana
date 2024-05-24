import React, { useState } from "react";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";

export default function Inventory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightsPerPage] = useState(5);
  const [workingFilter, setWorkingFilter] = useState("all");
  const [search, setSearch] = useState("");

  const streetLights = [
      {
        "streetLightID": "SL001",
        "address": "123 Main Street",
        "workingStatus": "Working",
        "installationDate": "2023-01-15",
        "lastMaintenanceDate": "2023-08-20",
        "maintenanceNote": "Replaced bulb",
        "powerSource": "Solar Panel",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL002",
        "address": "456 Elm Street",
        "workingStatus": "Working",
        "installationDate": "2022-11-05",
        "lastMaintenanceDate": "2023-09-12",
        "maintenanceNote": "Cleaned solar panels",
        "powerSource": "Piezo",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL003",
        "address": "789 Oak Avenue",
        "workingStatus": "Not Working",
        "installationDate": "2023-02-28",
        "lastMaintenanceDate": "2023-10-05",
        "maintenanceNote": "Replaced battery",
        "powerSource": "Wind",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL004",
        "address": "1011 Pine Street",
        "workingStatus": "Working",
        "installationDate": "2023-04-17",
        "lastMaintenanceDate": "2023-11-22",
        "maintenanceNote": "Repaired wiring",
        "powerSource": "Solar Panel",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL005",
        "address": "1315 Maple Avenue",
        "workingStatus": "Not Working",
        "installationDate": "2023-03-10",
        "lastMaintenanceDate": "2023-12-15",
        "maintenanceNote": "Replaced sensor",
        "powerSource": "Piezo",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL006",
        "address": "1617 Cedar Street",
        "workingStatus": "Working",
        "installationDate": "2022-12-20",
        "lastMaintenanceDate": "2024-01-10",
        "maintenanceNote": "Cleaned solar panels",
        "powerSource": "Wind",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL007",
        "address": "1819 Walnut Avenue",
        "workingStatus": "Working",
        "installationDate": "2023-05-05",
        "lastMaintenanceDate": "2024-02-08",
        "maintenanceNote": "Replaced bulb",
        "powerSource": "Solar Panel",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL008",
        "address": "2021 Birch Street",
        "workingStatus": "Not Working",
        "installationDate": "2023-07-12",
        "lastMaintenanceDate": "2023-12-30",
        "maintenanceNote": "Repaired wiring",
        "powerSource": "Piezo",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL009",
        "address": "2223 Ash Avenue",
        "workingStatus": "Working",
        "installationDate": "2023-06-25",
        "lastMaintenanceDate": "2024-01-18",
        "maintenanceNote": "Replaced battery",
        "powerSource": "Wind",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL010",
        "address": "2425 Oak Street",
        "workingStatus": "Not Working",
        "installationDate": "2023-08-30",
        "lastMaintenanceDate": "2024-02-22",
        "maintenanceNote": "Replaced sensor",
        "powerSource": "Solar Panel",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL011",
        "address": "2627 Maple Avenue",
        "workingStatus": "Working",
        "installationDate": "2023-10-10",
        "lastMaintenanceDate": "2024-03-05",
        "maintenanceNote": "Replaced bulb",
        "powerSource": "Piezo",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL012",
        "address": "2829 Cedar Street",
        "workingStatus": "Working",
        "installationDate": "2023-09-03",
        "lastMaintenanceDate": "2024-03-15",
        "maintenanceNote": "Cleaned solar panels",
        "powerSource": "Wind",
        "controlSystem": "Remote Control",
        "owner": "City Municipality"
      },
      {
        "streetLightID": "SL013",
        "address": "3031 Walnut Avenue",
        "workingStatus": "Not Working",
        "installationDate": "2023-11-18",
        "lastMaintenanceDate": "2024-04-08",
        "maintenanceNote": "Repaired wiring",
        "powerSource": "Solar Panel",
        "controlSystem": "Manual Switch",
        "owner": "City Municipality"
      }
  ];

  // Filtered street lights based on working status
  let filteredLights = workingFilter === "all" ? streetLights : streetLights.filter(light => light.workingStatus === workingFilter);

  // Apply search filter
  filteredLights = filteredLights.filter(light =>
    light.streetLightID.toLowerCase().includes(search.toLowerCase()) ||
    light.address.toLowerCase().includes(search.toLowerCase())
  );

  // Logic for pagination
  const indexOfLastLight = currentPage * lightsPerPage;
  const indexOfFirstLight = indexOfLastLight - lightsPerPage;
  const currentLights = filteredLights.slice(indexOfFirstLight, indexOfLastLight);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="Header text-center m-2">Inventory</h2>

      {/* Search section */}
      <div>
      <input type="text" 
       placeholder="Search" 
       value={search} 
       onChange={(e) => setSearch(e.target.value)}
       style={{ width: '300px' }}  className="ms-5 mt-3 ps-1"/>
</div>

      {/* Table displaying street lights */}
      <div className="InventoryTabel m-5 p-1">
      <table>
        <thead>
          <tr>
            <th>Street Light ID</th>
            <th>Address</th>
            <th>Working Status
            <select id="workingFilter" value={workingFilter} onChange={(e) => setWorkingFilter(e.target.value)}>
    <option value="all">All</option>
    <option value="Working">Working</option>
    <option value="Not Working">Not Working</option>
  </select>
            </th>
            <th>Installation Date</th>
            <th>Last Maintenance Date</th>
            <th>Maintenance Note</th>
            <th>Power Source</th>
            <th>Control System</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {currentLights.map(light => (
            <tr key={light.streetLightID}>
              <td>{light.streetLightID}</td>
              <td>{light.address}</td>
              <td>{light.workingStatus}</td>
              <td>{light.installationDate}</td>
              <td>{light.lastMaintenanceDate}</td>
              <td>{light.maintenanceNote}</td>
              <td>{light.powerSource}</td>
              <td>{light.controlSystem}</td>
              <td>{light.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Pagination */}
      <div className="m-5">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="m-2"><GrChapterPrevious/></button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentLights.length < lightsPerPage}><GrChapterNext /></button>
      </div>
    </div>
  );
}
