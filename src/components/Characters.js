import React from 'react';

const Characters = ( props ) => {
  console.log( 'props:', props );

  return (
    props.names.map( name => {
      return (
        <tr>
          <td>{name.name}</td>
          <td>{name.birth_year}</td>
          <td>{name.height}</td>
          <td>{name.mass}</td>
          <td>{name.homeworld}</td>
          <td>{name.species}</td>
        </tr>
      );
    } )

  );
};

export default Characters;