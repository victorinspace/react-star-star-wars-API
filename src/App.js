import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Row, Col } from 'react-bootstrap';

const App = () => {
  const [name, setName] = useState( 'https://swapi.dev/api/people/1' );
  const [birthDate, setBirthDate] = useState( 'https://swapi.dev/api/people/1' );
  const [height, setHeight] = useState( 'https://swapi.dev/api/people/1' );
  const [mass, setMass] = useState( 'https://swapi.dev/api/people/1' );
  const [homeworld, setHomeworld] = useState( 'https://swapi.dev/api/people/1' );
  const [species, setSpecies] = useState( 'https://swapi.dev/api/people/1' );

  // const fetchData = () => {
  //   const characterAPI = 'https://swapi.dev/api/people/1';

  //   const getCharacterName = axios.get(characterAPI);
  // }


  // const name = 'https://swapi.dev/api/people/1';
  // const birthDate = 'https://swapi.dev/api/people/';

  const requestName = axios.get( name.name );
  const requestBirthDate = axios.get( birthDate.birth_year );
  const requestHeight = axios.get( height.height );
  const requestMass = axios.get( mass.mass );
  const requestHomeworld = axios.get( homeworld.homeworld );
  const requestSpecies = axios.get( species.species );


  axios.all( [requestName, requestBirthDate, requestHeight, requestMass, requestHomeworld, requestSpecies] ).then( axios.spread( ( ...responses ) => {
    const nameResponse = responses[0];
    const birthDateResponse = responses[1];
    const heightResponse = responses[2];
    const massResponse = responses[3];
    const homeworldResponse = responses[4];
    const speciesResponse = responses[5];
  } ) ).catch( errors => console.error( 'error' ) );


  // requestName.then(response => console.log(response) ).catch(error => console.error(error))


  // useEffect( () => {
  //   fetch( `${peopleAPI}1` )
  //     .then( response => response.json() )
  //     .then( data => {
  //       setName( data.name );
  //     } );
  // }, [setName] );

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
            responsive="sm"
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
              <tr>
                <td>{name}</td>
                <td>{birthDate}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td>{homeworld}</td>
                <td>{species}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
