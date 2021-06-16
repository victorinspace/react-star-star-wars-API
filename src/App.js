import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [names, setName] = useState( [] );
  const [charactersUrl, setCharactersUrl] = useState( 0 );

  useEffect( () => {
    const fetchData = async () => {
      setCharactersUrl( 'https://swapi.dev/api/people/' );

      await axios.get( charactersUrl ).then( response => {
        console.log( response.data.results );

        const characters = response.data;

        setName( characters.results );
      } );
    };

    fetchData();
  }, [charactersUrl] );

  return (
    <Container>
      <Row>
        <Col>
          <h1>SWAPI</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            variant="dark"
            striped
            bordered
            hover
          >
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
              <Characters names={names} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
