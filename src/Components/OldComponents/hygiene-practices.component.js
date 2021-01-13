import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HygienePractice = props => (
  <tr>
    <td>{props.practice.title}</td>
    <td>{props.practice.description}</td>
    <td>{props.practice.devices}</td>
  </tr>
)

export default class PracticesList extends Component {
  constructor(props) {
    super(props);

    this.state = {hygienePractices: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/hygienepractices/')
      .then(response => {
        this.setState({ hygienePractices: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  exerciseList() {
    return this.state.exercises.map(currentpractice => {
      return <HygienePractice practice={currentpractice} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}