import React from "react";

function Buttons(props) {
    return <div className="pl-2 mb-2">

        <div className="dropdown btn-group btn-group-inline">
            <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => props.handleSort("occupation")}>Position</a>
                <a className="dropdown-item" onClick={() => props.handleSort("team")}>Team</a>
                <a className="dropdown-item" onClick={() => props.handleSort("officeNumber")}>Office</a>
            </div>
        </div>

        <div className="dropdown btn-group btn-group-inline mx-1">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter by Position  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => props.handleOccupationFilter("Manager")}>Manager</a>
                <a className="dropdown-item" onClick={() => props.handleOccupationFilter("Engineer")}>Engineer</a>
                <a className="dropdown-item" onClick={() => props.handleOccupationFilter("Intern")}>Intern</a>
            </div>
        </div>

        <div className="dropdown btn-group btn-group-inline">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter by Team  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => props.handleTeamFilter(1)}>1</a>
                <a className="dropdown-item" onClick={() => props.handleTeamFilter(2)}>2</a>
            </div>
        </div>

    </div>

}

export default Buttons;
