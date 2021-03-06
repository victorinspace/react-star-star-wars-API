import React from 'react';

const Characters = ( props ) => {
  return (
    props.characters.map( character => {
      return (
        <tr key={character.name}>
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