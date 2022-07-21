import React from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

class App extends React.Component {
  state = {
    profiles: []
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res.data.results);
      this.setState({profiles: res.data.results});
    })
  }

  render() {
    return (
      <main>
        <Col>
          <Row>
          {this.state.profiles.map(obj => 
            <Col className="text-center col-lg-4 col-md-6">
            <img src={obj.image} alt="Pictures"/>
            <h2>{obj.name}</h2>
            </Col>
           )}
          </Row>
        </Col>
      </main>
      )
   }
 }

export default App