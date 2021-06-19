import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [characters, setCharacterData] = useState( [] );

  useEffect( () => {
    const fetchData = async () => {

      const swapiUrl = 'https://swapi.dev/api/';

      try {
        const charactersData = await axios
          .get( `${swapiUrl}people` )
          .then( response => response.data.results );

        for ( const character of charactersData ) {
          const homeworld = await axios
            .get( character.homeworld );

          character.homeworld = homeworld.data.name;
        }

        setCharacterData( charactersData );
      } catch ( error ) {
        console.log( error );
      }
    };

    fetchData();
  }, [] );

  return (
    <Container>
      <Row>
        <Col>
          <h1>SWAPI</h1>
        </Col>
      </Row>
      <Row>
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
            <Characters characters={characters} />
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default App;
