import React, { Component } from 'react';
import './App.css';
import employees from './employees.json'
import Wrapper from './components/Wrapper'

class App extends Component {
  state = {
    employees
  };
  baseState = {
    employees
  }

  handleOccupationFilter = occupation => {
    const employees = this.baseState.employees.filter(employee => employee.occupation === occupation);
    this.setState({ employees });
  };

  handleTeamFilter = team => {
    const employees = this.baseState.employees.filter(employee => employee.team === team);
    this.setState({ employees });
  };

  
  handleSort = column => {
    const employees = this.state.employees.sort((a, b) => a[column] - b[column])
    this.setState({ employees })
  }

  render() {
    return (
      <Wrapper employees={this.state.employees}
        handleTeamFilter={this.handleTeamFilter}
        handleOccupationFilter={this.handleOccupationFilter}
        handleSort={this.handleSort} />
    )
  }
}

export default App;
