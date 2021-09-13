import React, { Component } from "react";

export default class ExpectedIncome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "",
      updatedValues: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({
      month: e.target.value,
    });
    console.log(this.state.month);
  };

  render() {
    return (
      <div className="">
        <select
          className="dropdown-toggle btn btn-info "
          name="day"
          id="day"
          onClick={this.handleInputChange}
        >
          <option>Choose Month</option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Aug</option>
          <option value="9">Sept</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">program</th>
              <th scope="col">Total Income</th>
              <th scope="col">Year/Month</th>
            </tr>
          </thead>
          <tbody>
            {this.props.values.map((program, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{program.pname}</td>
                <td>{program.total_income}</td>
                <td>
                  {program.year} / {program.month}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
