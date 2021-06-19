import React from 'react';

const Characters = ( props ) => {
  console.log( 'props:', props );

  return (
    props.characters.map( character => {
      return (
        <tr>
          <td>{character.name}</td>
          <td>{character.birth_year}</td>
          <td>{`${character.height} cm`}</td>
          <td>{`${character.mass} kg`}</td>
          <td>{character.homeworld}</td>
          <td>{character.species}</td>
        </tr>
      );
    } )

  );
};

export default Characters;