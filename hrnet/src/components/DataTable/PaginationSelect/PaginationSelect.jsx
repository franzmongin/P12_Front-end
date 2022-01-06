import React, { useState } from "react";
import "./PaginationSelect.css";
import { useSelector, useDispatch } from "react-redux";
import { changeNumberOfRows } from "../../../features/employees/employeesSlice";

function PaginationSelect() {
  const dispatch = useDispatch();
  const handleChangePaginationSelect = (e) => {
    dispatch(changeNumberOfRows(e.target.value));
  };
  return (
    <div className="dataTables_length" id="employee-table_length">
      <label>
        Show
        <select
          name="employee-table_length"
          aria-controls="employee-table"
          className="PaginationSelect-select"
          onChange={handleChangePaginationSelect}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
  );
}

export default PaginationSelect;