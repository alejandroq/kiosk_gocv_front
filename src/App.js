import React, { Component } from 'react';
import './App.css';
import {Jumbotron, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Jumbotron>
      <h1>Capitol Go University Advising Center</h1>

     </Jumbotron>
      <p>
      <img src="http://localhost:8090/camera" height={500} responsive/> 
        </p>
        <Button
                bsStyle="primary"
                bsSize="large"
                href="http://localhost:8090/face"
                target="_blank">
                Check In
              </Button>
      

     </div>
 
    );
  }
}

export default App;
