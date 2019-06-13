import React, { Component } from 'react';
import { Jumbotron,
         Container,
         Row,
         Col,
         Form,
         FormGroup,
         Label,
         Input,
         CustomInput,
         Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4">Pronoun Swapper</h1>
        <Form>
          <FormGroup>
            <Label for="inputText">Copy your text here</Label>
            <Col sm={12}><Input type="textarea" name="text" id="inputText" /></Col>
          </FormGroup>
          <Row form>
            <Col sm="8">
              <CustomInput type="radio" id="maleRadioButton" label="Male" inline />
              <CustomInput type="radio" id="femaleRadioButton" label="Female" inline />
            </Col>
            <Col sm="4">
              <Button size="sm">Swap it!</Button>
            </Col>
          </Row>
          <FormGroup>
            <Label for="outputText">Here's your pronoun swapped text!</Label>
            <Input type="textarea" name="text" id="outputText" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;
