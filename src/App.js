import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      student: "",
      counselor: "",
      image: "images/none.jpg",
      cameraDisplay: true,
      counselorDisplay: false
    };

    this.getFace = this.getFace.bind(this);
  }

  getFace() {
    axios
      .get("http://localhost:8090/face")
      .then(response => {
        console.log("response is ", response);
        this.setState({
          student: response.data.StudentName,
          counselor: response.data.CounselorName,
          image: response.data.CounselorImage,
          cameraDisplay: false,
          counselorDisplay: true
        })
      }
      );
  }
  render() {
    return (
      <div className="App">
  
        <Jumbotron style={{height: 200}}  className="bg-primary h-25">
        <Grid>
        <Row >
        <Col className='col-md-2'>
        <img  src={process.env.PUBLIC_URL + "shrinkylincoln.png"}/>
        </Col>
        
        <Col className='col-md-8 align-center text-white'>
          <h1>Capitol Go University Advising Center</h1>
          
          
          </Col>
          </Row>
          </Grid>
        </Jumbotron>
        
        {this.state.counselorDisplay && <YourCounselor student={this.state.student} counselor={this.state.counselor} image={this.state.image} />}

        {this.state.cameraDisplay && <StudentCamera onClick={this.getFace}/>}
        <grid>

<row>
Powered By MachineBox.io <br/>
        </row>
        </grid>
      </div>
    );
  }
}

const YourCounselor = (props) => (
  <div id="your-counselor" >
  <Grid>
  <Row>
  <Col className='col-md-4 text-secondary'>
    <h1>Welcome {props.student}!!</h1>
    <br/>
    <h2>Your counselor: {props.counselor} will be with you shortly</h2>
    </Col>
    <Col className='col-md-8'>
    <img src={process.env.PUBLIC_URL + props.image}   height={400}  />
    <audio src={"http://localhost:8090/audio/name/" + props.student} autoPlay></audio>
    </Col>
    </Row>
    </Grid>
  </div>
);

const StudentCamera = (props) => (

  <div id="student-camera">
    <p>
      <img src="http://localhost:8090/camera" height={400} />
    </p>
    <Button
      bsStyle="primary"
      bsSize="large"
      onClick={props.onClick}
      target="_blank"
    >
      Check In
    </Button>
  </div>
);

export default App;
