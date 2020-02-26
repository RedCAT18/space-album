import React, { useState } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

const categories = [
  { id: 1, name: 'q' },
  { id: 2, name: 'description' },
  { id: 3, name: 'keywords' },
  { id: 4, name: 'title' },
  { id: 5, name: 'location' }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-width: 768px;
  margin: 80px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  padding: 40px;
  color: white;
`;

const SearchBox = styled.div`
  width: 80%;
  margin-bottom: 40px;
  padding: 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const Search = () => {
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('q');

  const sendRequest = async quote => {
    await api.getSearch(quote).then(res => {
      console.log(res);
    });
  };

  return (
    <Container>
      <Title>
        <h1>Search</h1>
      </Title>
      <SearchBox>Search options</SearchBox>
    </Container>
  );
};

export default Search;

//q, description, keywords, location, title, year_Start, year_end
