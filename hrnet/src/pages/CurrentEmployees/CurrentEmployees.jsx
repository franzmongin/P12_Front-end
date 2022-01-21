import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../../components/DataTable/DataTable";

// page which displays the employees table
function CurrentEmployees() {
  let employees = JSON.parse(localStorage.getItem("employees"));
  let columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];
  return (
    <div className="current-employees page">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable data={employees} columns={columns} />
        <Link to="/" className="">
          Home
        </Link>
      </div>
    </div>
  );
}

export default CurrentEmployees;
