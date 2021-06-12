import React, { useState, useEffect } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [characterName, setState] = useState( "" )

  useEffect( () => {
    fetch( "https://swapi.dev/api/people/1" )
      .then( response => response.json() )
      .then( data => {
        setState( data.name )
      } )
  } )

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1>SWAPI</h1>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Homeworld</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{characterName}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
