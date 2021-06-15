import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [names, setName] = useState( [] );
  const [homeworld, setHomeworld] = useState( [] );
  const [species, setSpecies] = useState( [] );

  useEffect( () => {
    const fetchData = async () => {
      await axios
        .get( 'https://swapi.dev/api/people/' )
        .then( response => {
          // console.log( response.data.results );

          const characters = response.data;
          setName( prevName => characters.results );
        } );

      // console.log( 'names: ', names );
    };

    fetchData();
  }, [names] );

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
              {names.map( name => {
                return (
                  <tr key={name.id}>
                    <td>{name.name}</td>
                    <td>{name.birth_year}</td>
                    <td>{name.height}</td>
                    <td>{name.mass}</td>
                    <td>{name.homeworld}</td>
                    <td>{name.species}</td>
                  </tr>
                );
              } )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
