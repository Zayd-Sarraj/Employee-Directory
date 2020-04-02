import React from "react";
import Buttons from "./Buttons"
import EmployeeList from "./List"

function Wrapper(props) {
    
    return <div className="container mt-2">
        <h1 className="text-center pb-2 mt-4 mb-2 border-bottom">Employee Directory</h1>
        <Buttons handleTeamFilter={props.handleTeamFilter} handleOccupationFilter={props.handleOccupationFilter} handleSort={props.handleSort} />
        <table className="table border">
            <thead>
                <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Name</th>
                    <th scope="col">Team</th>
                    <th scope="col">Office</th>
                </tr>
            </thead>
                <EmployeeList employees={props.employees}/>
        </table>
    </div>;
}

export default Wrapper;
