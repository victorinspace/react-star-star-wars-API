import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ( props ) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type='search' placeholder='character search' />
      </Form.Group>
      <Button variant='warning' type='submit'>Find</Button>
    </Form>
  );
};

export default Search;