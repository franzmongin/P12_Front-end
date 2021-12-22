import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [birthDateInput, setbirthDateInput] = useState("");
  const [startDateInput, setstartDateInput] = useState("");
  const [streetInput, setstreetInput] = useState("");
  const [cityInput, setcityInput] = useState("");
  const [stateInput, setstateInput] = useState("");
  const [zipCodeInput, setzipCodeInput] = useState("");
  const [departmentInput, setdepartmentInput] = useState("");
  const saveEmployees = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      dateOfBirth: birthDateInput,
      startDate: startDateInput,
      department: departmentInput,
      street: streetInput,
      city: cityInput,
      state: stateInput,
      zipCode: zipCodeInput,
    };
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };
  return (
    <div className="home-page page">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setfirstNameInput(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setlastNameInput(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            onChange={(e) => setbirthDateInput(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            onChange={(e) => setstartDateInput(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setstreetInput(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setcityInput(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) => setstateInput(e.target.value)}
            ></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setzipCodeInput(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) => setdepartmentInput(e.target.value)}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={() => saveEmployees()}>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
}

export default HomePage;
