import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [characters, setName] = useState( [] );
  // const [charactersUrl, setCharactersUrl] = useState( 0 );

  useEffect( () => {

    const fetchData = async () => {

      // setCharactersUrl( 'https://swapi.dev/api/' );

      const url = 'https://swapi.dev/api/';

      await axios
        .get( `${url}people` )
        .then( response => {

          // first ten characters array

          const characters = response.data.results;

          // loop through each character

          // make an HTTP request for the character's planet
          // when that comes back

          // set a property on character called homeworldName equal to response data

          // update characters

          setName( characters );

          console.log( 'characters: ', characters );
        } )
        .catch( error => console.log( error ) );

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
