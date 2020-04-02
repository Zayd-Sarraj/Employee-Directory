import React from "react";

function EmployeeList(props) {
  return ( 
        <tbody>
        {props.employees.map(employee => 
          <tr>
            <th scope="row">{employee.occupation}</th>
            <td>{employee.name}</td>
            <td>{employee.team}</td>
            <td>{employee.officeNumber}</td>
          </tr>
        )}
        </tbody>
  );
}

export default EmployeeList;