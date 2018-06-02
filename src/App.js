import React, { Component } from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
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
        <Jumbotron>
          <h1>Capitol Go University Advising Center</h1>
        </Jumbotron>

        {this.state.counselorDisplay && <YourCounselor student={this.state.student} counselor={this.state.counselor} image={this.state.image} />}

        {this.state.cameraDisplay && <StudentCamera onClick={this.getFace}/>}
      </div>
    );
  }
}

const YourCounselor = (props) => (
  <div id="your-counselor">
    <p>Welcome {props.student}!!</p>
    <p>Your counselor: {props.counselor} will be with you shortly</p>
    <img src={process.env.PUBLIC_URL + props.image}   height={500} width={500} />
  </div>
);

const StudentCamera = (props) => (

  <div id="student-camera">
    <p>
      <img src="http://localhost:8090/camera" height={500} responsive />
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
