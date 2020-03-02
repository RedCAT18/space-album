import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

import Show from '../components/Show/';
import Arrow from '../components/Arrow/';
import NoResults from '../components/NoResults/';

const categories = [
  { id: 1, name: 'Quote', value: 'q' },
  { id: 2, name: 'Description', value: 'description' },
  { id: 3, name: 'Keywords', value: 'keywords' },
  { id: 4, name: 'Title', value: 'title' },
  { id: 5, name: 'Location', value: 'location' }
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Selection = styled.select`
  border-radius: 0.5em;
  height: 25px;
  border: 1px solid transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 100;
  flex: 1;
  height: 40px;
  margin-right: 10px;
`;

const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 100;
  flex: 3;
  height: 35px;
  margin-right: 10px;
  padding-left: 10px;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  flex: 1;
  font-size: 18px;
  font-weight: 100;
  background-color: white;
  :active {
    transform: scale(0.98);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const ArrowZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  color: white;
  span {
    margin: 0 20px;
  }
`;

const Search = () => {
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('q');
  const [resources, setResources] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);

  const separatePages = data => {
    //100개 배열을 10개씩 나누어 array에 담기
    let array = [];
    let len = data.length;
    for (let i = 0; i < len / 10; i++) {
      array.push(data.slice(i * 10, (i + 1) * 10));
    }
    return array;
  };

  const handleChange = e => {
    setQuote(e.target.value);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const sendRequest = async () => {
    if (quote === '') return;
    setPages(1);
    setResources(null);
    setResults(null);
    setLoading(true);

    const payload = { quote, category };
    await api.getSearch(payload).then(res => {
      setResources(separatePages(res));
    });
    setQuote('');
    setCategory('q');

    setLoading(false);
    document.getElementById('inputText').value = '';
  };

  useEffect(() => {
    if (resources) {
      setResults(resources[pages]);
      window.scrollTo(0, 0);
    }
  }, [pages, resources]);

  const goPrevPage = data => {
    if (pages === 1) return;
    setPages(data);
  };

  const goNextPage = data => {
    if (pages === resources.length - 1) return;
    setPages(data);
  };

  // const RenderArrow = dirt => {
  //   const func = dirt === 'next' ? goNextPage : goPrevPage;
  //   console.log(func);
  //   return results ? <Arrow props={dirt} onClick={func} /> : null;
  // };

  return (
    <Container>
      <Title>
        <h1>Search</h1>
      </Title>
      <SearchBox>
        <Selection onChange={handleCategory}>
          {categories.map(category => (
            <option key={category.id} value={category.value}>
              {category.name}
            </option>
          ))}
        </Selection>
        <TextInput
          id="inputText"
          type="text"
          placeholder="Input text for search..."
          onChange={handleChange}
        />
        <SubmitButton onClick={sendRequest}>Search</SubmitButton>
      </SearchBox>

      <Content>
        {results && results.length !== 0 ? (
          results.map((result, idx) => <Show key={idx} {...result} />)
        ) : loading ? (
          <img src="./assets/reload.svg" alt="loading" />
        ) : (
          <NoResults />
        )}
      </Content>

      {results ? (
        <ArrowZone>
          <Arrow direct={'prev'} handlePage={goPrevPage} pages={pages} />
          <span>
            Page {pages} of {resources.length}
          </span>
          <Arrow direct={'next'} handlePage={goNextPage} pages={pages} />
        </ArrowZone>
      ) : null}
    </Container>
  );
};

export default Search;

//q, description, keywords, location, title, year_Start, year_end
