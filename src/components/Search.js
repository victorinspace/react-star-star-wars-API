import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ( props ) => {
  const [searchValue, setSearchValue] = useState( '' );

  const handleSearchChanges = ( e ) => {
    setSearchValue( e.target.value );
  };

  const searchCharacterData = ( e ) => {
    e.preventDefault();
    console.log( 'search initiated' );
  };

  console.log( `${props.searchQuery}?search=${searchValue}` );

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type='search'
          placeholder='character search'
          value={searchValue}
          onChange={handleSearchChanges}
        />
      </Form.Group>
      <Button
        onClick={searchCharacterData}
        variant='warning'
        type='submit'
      >
        Find
      </Button>
    </Form>
  );
};

export default Search;