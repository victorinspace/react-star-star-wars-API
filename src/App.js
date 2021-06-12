import React, { useState, useEffect } from 'react';
// import { Table, Row, Col } from 'react-bootstrap';

function App () {
  const [characterName] = useState

  useEffect( () => {
    fetch( "https://swapi.dev/api/people/1" )
      .then( response => response.json() )
      .then( data => console.log( 'data', data ) )
  } )

  return (
    <div>
      <h1>SWAPI</h1>
      <h3>{characterName}</h3>
    </div>
  );
}

export default App;
